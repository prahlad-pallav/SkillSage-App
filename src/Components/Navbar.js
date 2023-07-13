import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import skill from '../assets/Skill.png';

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto nav'>

        <Link to='/'>
            <img src={skill} alt="logo" width={160} height={32} loading="lazy" />
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to='/login'>
                    <button className='bg-richblack-800 text-green-100 py-[6px] px-[14px] rounded-[8px] border border-richblack-700'>Log In</button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to='/signup'>
                    <button className='bg-richblack-800 text-green-100 py-[6px] px-[14px] rounded-[8px] border border-richblack-700'>Sign Up</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/'>
                    <button className='bg-richblack-800 text-red-100 py-[6px] px-[14px] rounded-[8px] border border-richblack-700' onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>Log Out</button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/dashboard'>
                    <button className='bg-richblack-800 text-green-100 py-[6px] px-[14px] rounded-[8px] border border-richblack-700'>DashBoard</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar