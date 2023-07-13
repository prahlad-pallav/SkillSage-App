import React from 'react';
import signImg from '../assets/signup.png';
import Template from '../Components/Template';


const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template 
        title= "Join the millions learning to code with SkillSage for free 😋"
        desc1= "Build skills for today, tomorrow, and beyond."
        desc2= "Education to future-proof your career."
        image={signImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup