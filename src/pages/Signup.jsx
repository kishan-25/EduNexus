import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from 'react-icons/fa';
import signupImage from '../assets/Images/signupImage.png';
import loginBackground from '../assets/Images/loginBackground.png';
import countryCode from '../data/countrycode.json';
import { sendOtp } from '../services/operations/authAPI';
import { toast } from 'react-hot-toast';

const ACCOUNT_TYPE = {
  STUDENT: 'Student',
  INSTRUCTOR: 'Instructor'
};

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    countryCode: countryCode[0].dial_code,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const signupData = { ...formData, accountType };

    await dispatch(sendOtp(formData.email, signupData, navigate));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
      countryCode: countryCode[0].dial_code,
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  return (
    <div className='bg-richblack-900 flex justify-center items-center w-full min-h-screen py-4 px-4 sm:py-10'>
      <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-6 lg:gap-12 w-full max-w-6xl'>
        
        {/* Left Section (Form) */}
        <div className='flex flex-col w-full lg:w-[40%] p-6 sm:p-8 lg:p-10 bg-gray-800 rounded-lg shadow-lg'>
          <p className='text-2xl sm:text-3xl text-white font-bold text-center'>Join EduNexus for free</p>
          <p className='text-sm text-gray-300 mt-3 text-center'>
            Build skills for today, tomorrow, and beyond.{" "}
            <span className='font-semibold text-blue-300'>Future-proof your career.</span>
          </p>

          {/* Account Type Toggle */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-5 bg-gray-700 rounded-full p-1">
            <button type="button" onClick={() => setAccountType(ACCOUNT_TYPE.STUDENT)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${accountType === ACCOUNT_TYPE.STUDENT ? 'bg-richblack-900 text-white' : 'bg-gray-700 text-gray-200'}`}>
              Student
            </button>
            <button type="button" onClick={() => setAccountType(ACCOUNT_TYPE.INSTRUCTOR)}
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${accountType === ACCOUNT_TYPE.INSTRUCTOR ? 'bg-richblack-900 text-white' : 'bg-gray-700 text-gray-200'}`}>
              Instructor
            </button>
          </div>

          <form className='w-full mt-5' onSubmit={handleOnSubmit}>
            {/* Name Fields */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleOnChange}
                placeholder="First Name" className="w-full sm:w-1/2 px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleOnChange}
                placeholder="Last Name" className="w-full sm:w-1/2 px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
            </div>

            {/* Email */}
            <input type="email" name="email" value={formData.email} onChange={handleOnChange}
              placeholder="Email Address" className="w-full px-4 py-3 mt-4 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />

            {/* Contact Number */}
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
              <select name="countryCode" value={formData.countryCode} onChange={handleOnChange}
                className='w-full sm:w-1/3 px-4 py-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500' required>
                {countryCode.map((country) => (
                  <option key={country.code} value={country.dial_code}>{country.dial_code}</option>
                ))}
              </select>
              <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleOnChange}
                placeholder="12345 67890" className='w-full sm:w-2/3 px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500' required />
            </div>

            {/* Passwords */}
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
              <div className='relative w-full sm:w-1/2'>
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleOnChange}
                  placeholder="Password" className="w-full px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center">
                  <FaRegEye className='text-gray-400 hover:text-yellow-500 transition-colors duration-200' />
                </button>
              </div>
              <div className='relative w-full sm:w-1/2'>
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleOnChange}
                  placeholder="Confirm Password" className="w-full px-4 py-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-12" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-3 flex items-center">
                  <FaRegEye className='text-gray-400 hover:text-yellow-500 transition-colors duration-200' />
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="mt-6 w-full bg-yellow-500 text-black font-bold py-3 rounded-md hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-800">
              Sign up
            </button>
          </form>
        </div>

        {/* Right Section (Image) - Hidden on mobile, visible on desktop */}
        <div className='hidden lg:flex w-[40%] justify-center items-center'>
          <div className='relative w-full'>
            <img src={loginBackground} alt="Background" className='absolute w-5/6 z-0 object-cover translate-x-4 translate-y-[-46%]' />
            <img src={signupImage} alt="Signup" className='absolute w-5/6 z-10 object-cover translate-y-[-50%]' />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;