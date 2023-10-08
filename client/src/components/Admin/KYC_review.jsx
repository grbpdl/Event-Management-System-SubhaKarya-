
import React, { useState, useEffect } from "react";
import "./KYC_review.css";
import axios from '../../api/axios';
import Sidebar from './Sidebar'
import { Typography } from '@mui/material';
import KycCard from "./Kyc_Card";


const KYC_review = () => {
  
  const [kycs, setKycs] = useState([]);
  useEffect( () => {
    // Fetch KYC submissions from your server/API.
    fetchData();
    async function fetchData() {
    const response=await axios.get("/user/allkyc", { withCredentials: true })
    setKycs(response.data.kycs)
    }
  }, []);

  return (
      <>
      <div className="dashboard">
        <Sidebar />
        <div className="kycContainer">
        <Typography  component="h1">Review KYCs</Typography>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {kycs  && kycs.map((data) => (
        <KycCard
          key={data._id} 
          firstname={data.firstname}
          lastName={data.lastName}
          dateOfBirth={data.dateOfBirth}
          streetAddress={data.streetAddress}
          city={data.city}
          state={data.state}
          images={data.images[0].url}
          submitedAt={data.submitedAt}
          userid={data.user}
          kycid={data._id}
        />
      ))}

      </div>
  
        </div>
        </div>
          
          </>
          );
  };

          export default KYC_review;
