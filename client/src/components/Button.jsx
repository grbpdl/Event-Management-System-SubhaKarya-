

import React from 'react'
import axios from '../api/axios';

const Button = ({ styles,title}) => {
 
  const handleClick =async (e) => {
    if(title=="Login")
    {
    e.preventDefault();
   
    window.location.assign("http://localhost:5173/loginuser")
  }
  if(title=="Logout")

  {
    e.preventDefault();
    const response = await axios.get('/user/logout',
      {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
      }
  );
    
    window.location.assign("http://localhost:5173")
    

  }
  if(title=="Page not found go to home")
  {
  e.preventDefault();
 
  window.location.assign("http://localhost:5173")
}
  
  };
  return (
    <div>
      <button type="button" onClick={handleClick} className={`py-4 px-6 m-3  font-poppins font-medium text-[15px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {title}
  </button>
    </div>
  )
}

export default Button;

