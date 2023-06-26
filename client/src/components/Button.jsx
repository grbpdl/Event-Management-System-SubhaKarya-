import React from "react";

const Button = ({ styles,title }) => (
  <button type="button" className={`py-4 px-6 m-3  font-poppins font-medium text-[15px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {title}
  </button>
);

export default Button;
