import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    firstname:"", lastname:"", email:"", password:"", confirmpassword:""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event){

    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name] : event.target.value
    }
    ))
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmpassword){
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Signed In");
    navigate('/dashboard');
    const accountData = {...formData};
  
    const finalDate = {...formData, accountType};
    console.log(finalDate);

  }

  return (
    <div className='flex flex-col form '>

      <div className='flex flex-row bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button onClick={() => (setAccountType("student"))} className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Student</button>
        <button onClick={() => (setAccountType("instructor"))} className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
      </div>

      <form action="" onSubmit={submitHandler}>

      <div className='flex justify-between mb-2 signup'>
      <label>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
        <input type="text" required name='firstname' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstname}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
      </label>

      <label>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
        <input type="text" required name='lastname' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastname}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
      </label>
      </div>

      <div className='mt-3 mb-3'>
      <label className>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
        <input type="email" required name='email' onChange={changeHandler} placeholder='Enter Email Address' value={formData.email}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
      </label>
      </div>

      

      <div className='flex justify-between mt-3 mb-3 signup'>
      <label className='relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
        <input type={showPassword ? ("text") : ("password")} required name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
      
      <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
      {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
      </span>
      </label>

      <label className='relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
        <input type={showConfirmPassword ? ("text") : ("password")} required name='confirmpassword' onChange={changeHandler} placeholder='Confirm Password' value={formData.confirmpassword}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
      
      <span onClick={() => setShowConfirmPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
      {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
      </span>
      </label>
      </div>

      <button className='w-full text-center bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mb-4 mt-4'>Create Account</button>

      </form>
      
    </div>
  )
}

export default SignupForm