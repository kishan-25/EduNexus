const User = require("../models/User");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require('jsonwebtoken');

//sendOTP
exports.sendOtp = async (req, res) => {
    try{
        //fetch email  from request ki body
        const {email} = req.body;

        //check if user already exist
        const checkUserPresent = await User.findOne({email});

        //if user already exist, then return a response
        if(checkUserPresent) {
            return res.status(401).json({
                success:false,
                message:"User already registered",
            })
        }

        //generate otp
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        console.log("OTP generated : ", otp);

        //check unique otp or not
        let result = await OTP.findOne({otp:otp});

        while(result) {
            otp = otpGenerator(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp: otp});
        }

        const otpPayload = {email,otp};

        //create an entry for OTP

        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);

        //return response successful
        res.status(200).json ({
            success:true,
            message:"OTP Sent Successfully",
            otp,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
exports.signup = async (req, res) => {
	try {
		// Destructure fields from the request body
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			accountType,
			contactNumber,
			otp,
		} = req.body;
		// Check if All Details are there or not
		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!confirmPassword ||
			!otp
		) {
			return res.status(403).send({
				success: false,
				message: "All Fields are required",
			});
		}
		// Check if password and confirm password match
		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message:
					"Password and Confirm Password do not match. Please try again.",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
			});
		}

		// Find the most recent OTP for the email
		const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
		console.log(response);
		if (response.length === 0) {
			// OTP not found for the email
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		} else if (otp !== response[0].otp) {
			// Invalid OTP
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Fix the approved logic
		let approved = accountType === "Instructor" ? false : true;

		// Create the Additional Profile For User
		const profileDetails = await Profile.create({
			gender: null,
			dateOfBirth: null,
			about: null,
			contactNumber: null,
		});
		
		const user = await User.create({
			firstName,
			lastName,
			email,
			contactNumber: contactNumber || null, // Make contactNumber optional
			password: hashedPassword,
			accountType: accountType,
			approved: approved,
			additionalDetails: profileDetails._id,
			image: `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
	}
};

// //signUp
// exports.signup = async (req, res) => {
//     try{
//         //data fetch from request ki body
//         const {
//             firstName,
//             lastName,
//             email,
//             password,
//             confirmPassword,
//             accountType,
//             contactNumber,
//             otp
//         } = req.body;
//         // validate krlo
//         if(!firstName || !lastName || !email || !password || !confirmPassword
//             || !otp) {
//                 return res.status(403).json({
//                     success:false,
//                     message:"All fields are required",
//                 })
//             }
        
//             // check user already exist or not
//             const existingUser = await User.findOne({email});
//             if(existingUser) {
//                 return res.status(400).json({
//                     success:false,
//                     message:'OTP Found',
//                 })
//             }

//             //find most recent OTP stored for the user
//             const recentOtp = await OTP.find({email}).sort({createdAt:-1}).limit(1);
//             console.log(recentOtp);
//             //validate OTP
//             if(recentOtp.length == 0){
//                 //OTP found
//                 return res.status(200).json({
//                     success:true,
//                     message:"OTP Found",
//                 })
//             } else if(otp !== recentOtp.otp) {
//                 //Invalid OTP
//                 return res.status(400).json({
//                     success:false,
//                     message:"Invalid OTP",
//                 });
//             }

//             // Hash password
//             const hashedPassword = await bcrypt.hash(password,10);

//             //entry create in DB

//             const profileDetails = await Profile.create({
//                 gender:null,
//                 dateofBirth: null,
//                 about: null,
//                 contactNumber: null,
//             });

//             const user = await User.create({
//                 firstName,
//                 lastName,
//                 email,
//                 contactNumber,
//                 password:hashedPassword,
//                 accountType,
//                 additionalDetails:profileDetails._id,
//                 image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
//             })

//             //return res
//             return res.status(200).json({
//                 success:true,
//                 message:"User is registered Successfully",
//                 user,
//             });
//         }
//         catch(error){
//             console.log(error);
//             return res.status(500).json({
//                 success:false,
//                 message:"User cannot be registered, Plz try again",
//             })
//         }
// }


//Login
// exports.login = async (req, res) => {
//     try{
//         //get data from req body
//         const {email, password} = req.body;
//         // validation data
//         if(!email || !password) {
//             return res.status(403).json({
//                 success:false,
//                 message:"All fields are required, plz try again",
//             });
//         }
//         //user check exist or not
//         const user = await User.findOne({email}).populate("additionalDetails");
//         if(!user) {
//             return res.status(401).json({
//                 success:false,
//                 message:"User is not registered, plz signup first",
//             });
//         }
//         // generate JWT, after password matching
//         if(await bcrypt.compare(password, user.password)) {
//             const payload = {
//                 email: user.email,
//                 id: user._id,
//                 accountType:user.accountType,
//             }
//             const token = JsonWebTokenError.sign(payload, process.env.JWT_SECRET, {
//                 expiresIn:"2h",
//             });
//             user.token = token;
//             user.password = undefined;

//             //create cookie and send response
//             const options = {
//                 expires : new Date(Date.now() + 3*24*60*60*1000),
//                 httpOnly:true,
//             }
//             res.cookie("token", token, options).status(200).json({
//                 success:true,
//                 token,
//                 user,
//                 message:"Loggesd in Successfully",
//             })
//         }
//         else {
//             return res.status(401).json({
//                 success:false,
//                 message:"Password is incorrect",
//             });
//         }
//     }
//     catch(error){
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message:"Login Failure,plz try again",
//         })
//     }
// }


exports.login = async (req, res) => {
    try {
        // get data from req body
        const {email, password} = req.body;
        
        // validation data
        if(!email || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required, please try again",
            });
        }
        
        // user check exist or not
        const user = await User.findOne({email}).populate("additionalDetails");
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "User is not registered, please signup first",
            });
        }
        
        // generate JWT, after password matching
        if(await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
                accountType: user.accountType,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            
            // Save token to user model
            user.token = token;
            // Remove password from response
            user.password = undefined;

            // create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000), // 3 days
                httpOnly: true,
            }
            
            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "Logged in Successfully",
            });
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Password is incorrect",
            });
        }
    }
    catch(error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login Failure, please try again",
        });
    }
}


//changePassword

// exports.changePassword = async (req,res) => {
//     //get data from req body
//     //get oldPassword, newPassword, confirmPassword
//     //validation

//     //update pwd in DB
//     //send mail - Password updated
//     //return response
// }


// Controller for Changing Password
exports.changePassword = async (req, res) => {
	try {
		// Get user data from req.user
		const userDetails = await User.findById(req.user.id);

		// Get old password, new password, and confirm new password from req.body
		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		// Validate old password
		const isPasswordMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);
		if(oldPassword === newPassword){
			return res.status(400).json({
				success: false,
				message: "New Password cannot be same as Old Password",
			});
		}
		
		if (!isPasswordMatch) {
			// If old password does not match, return a 401 (Unauthorized) error
			return res
				.status(401)
				.json({ success: false, message: "The password is incorrect" });
		}

		// Match new password and confirm new password
		if (newPassword !== confirmNewPassword) {
			// If new password and confirm new password do not match, return a 400 (Bad Request) error
			return res.status(400).json({
				success: false,
				message: "The password and confirm password does not match",
			});
		}

		// Update password
		const encryptedPassword = await bcrypt.hash(newPassword, 10);
		const updatedUserDetails = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		// Send notification email
		try {
			const emailResponse = await mailSender(
				updatedUserDetails.email,
				"Study Notion - Password Updated",
				passwordUpdated(
					updatedUserDetails.email,
					`Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
				)
			);
			console.log("Email sent successfully:", emailResponse.response);
		} catch (error) {
			// If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
			console.error("Error occurred while sending email:", error);
			return res.status(500).json({
				success: false,
				message: "Error occurred while sending email",
				error: error.message,
			});
		}

		// Return success response
		return res
			.status(200)
			.json({ success: true, message: "Password updated successfully" });
	} catch (error) {
		// If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
		console.error("Error occurred while updating password:", error);
		return res.status(500).json({
			success: false,
			message: "Error occurred while updating password",
			error: error.message,
		});
	}
};
