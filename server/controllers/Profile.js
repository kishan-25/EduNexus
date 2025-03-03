const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require('../utils/imageUploader');

exports.updateProfile = async (req, res) => {
    try{
        //get data
        const {dateOfBirth="", about="", contactNumber, geneder } = req.body;
        //get userId
        const id = req.user.id;
        //validation
        if(!contactNumber || !gender || !id) {
            return res.status(400).json({
                success:false,
                message:"All fields required",
            })
        }
        //find profile
        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);
        //update profile
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.about = about;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;
        await profileDetails.save();
        //return response
        return res.status(200).json({
            success:true,
            message:"Profile Updated Successfully",
            profileDetails,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:error.message,
        })
    }
}

//deleteAccount

exports.deleteAccount = async (req, res) => {
    try{
        //get id
        const id = req.user.id;
        //validation
        const userDetails = await User.findById(id);
        if(!userDetails) {
            return res.status
        }
        //delete profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails});
        //TODO: HW unenroll user form all enrolled courses
        //delete user
        await User.findByIdAndDelete({_id:id});
        //return response
        return res.status(200).json({
            success:true,
            message:"User deleted Successfully",
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User cannot be deleted Successfully",
        })
    } 
}

// userAlldetails

exports.getAllUserDetails = async (req, res) => {
    try{
        //get id
        const id = req.user.id;
        //validation and get user details
        const userDetails = await User.findById(id).populate("additionalDetails").exec();
        //return response
        return res.status(200).json({
            success:true,
            message:"User data fetched successfully",
            userDetails,
        });        
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


exports.getEnrolledCourses=async (req,res) => {
	try {
        const id = req.user.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const enrolledCourses = await User.findById(id).populate({
			path : "courses",
				populate : {
					path: "courseContent",
			}
		}
		).populate("courseProgress").exec();
        // console.log(enrolledCourses);
        res.status(200).json({
            success: true,
            message: "User Data fetched successfully",
            data: enrolledCourses,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.updateDisplayPicture = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        const image = req.files.pfp;
        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found",
            });
        }
        const uploadDetails = await uploadImageToCloudinary(
            image,
            process.env.FOLDER_NAME
        );
        console.log(uploadDetails);

        const updatedImage = await User.findByIdAndUpdate(
            {_id: id},
            {image: uploadDetails.secure_url},
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Image updated successfully",
            data: updatedImage,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


//instructor dashboard
exports.instructorDashboard = async (req, res) => {
	try {
		const id = req.user.id;
		const courseData = await Course.find({instructor:id});
		const courseDetails = courseData.map((course) => {
			totalStudents = course?.studentsEnrolled?.length;
			totalRevenue = course?.price * totalStudents;
			const courseStats = {
				_id: course._id,
				courseName: course.courseName,
				courseDescription: course.courseDescription,
				totalStudents,
				totalRevenue,
			};
			return courseStats;
		});
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: courseDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
}