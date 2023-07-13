import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    email:"", password:""
  })

  const [showPassword, setShowPassword] = useState(false);

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
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate('/dashboard');
    const accountData = {...formData};
    console.log(accountData);

  }

  
  return (
    <div>
    
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 form'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
            <input type="email" required name='email' onChange={changeHandler} placeholder='Enter Email Address' value={formData.email}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
        </label>
        
       

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>
            <input type={showPassword ? ("text") : ("password")} required name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
        
       
    

    <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
      {showPassword ? (<AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={20} fill='#AFB2BF'/>)}
    </span>

    <Link to="#"><p className='text-xs mt-1 text-blue-100 ml-auto max-w-max'>Forgot Password</p></Link>
    </label>

   
    <button className='text-center bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mb-4 mt-4'>Sign In</button>

    </form>

    </div>
  )
}

export default LoginForm