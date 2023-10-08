
import styles from "../../style.js";
import axios from '../../api/axios';
import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";

const KycCard = ({firstname,lastName, dateOfBirth, streetAddress,city,state,images,submitedAt, userid,kycid }) => {
    const alert = useAlert();
   const navigate=useNavigate();
    const handleclick =async (e) => {
        e.preventDefault();
      
      try{
          const response  = await axios.post(
            `/user/verify/kyc`,
            JSON.stringify({userid:userid,kycid:kycid }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
          );
          alert.show(response.data.message)
          navigate('/admindashboard')

          }
          catch(error)
          {
            alert.show(`Error occured while verifying the KYC`)
            
          }

    }
    return (
    <div className="bg-black flex justify-between flex-col px-10 py-12  rounded-[20px]  max-w-[700px] md:mr-10 sm:mr-5 mr-5 my-5 kyc-card hover:bg-slate-500">
      <button type="button" onClick={handleclick}  className={`py-4 px-6 m-3  font-poppins font-medium text-[15px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>Verify</button>
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-5">
      Name:{firstname} {" "} {lastName}
      </p>
    
      <div className="flex flex-row">
        <img src={images} alt="document image" className="w-[150px] h-[100px]" />
        <div className="flex flex-col ml-4">
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            User:{userid}
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            DOB:{dateOfBirth}
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            Adress:{streetAddress}
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            City:{city}
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            State:{state}
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            SubmttedAt:{submitedAt}
          </p>
          
        </div>
      </div>
    </div>
  );
    }
  
  
  export default KycCard;
  