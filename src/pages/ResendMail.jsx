import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const ForgotPassword = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-start bg-richblack-900'>
      <div className='flex flex-col w-[25%] h-5/6 justify-center'>

        <p className='text-3xl font-bold text-white'>Check Mail</p>
        <p className='text-sm text-gray-300 mt-2'>We have sent the reset email to your email account</p>

        <div>
					<button type="button"
							className="mt-5 w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
							// onClick={handleResendMail} 
					>
							Resend email
					</button>
        </div>

        <div class="text-left mt-2"><a href="/login" class="text-sm text-slate-200 flex items-center gap-2 hover:text-gray-500"><FaArrowLeftLong /> Back to login</a></div>

      </div>
    </div>
  )
}

export default ForgotPassword
