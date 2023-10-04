import React, { useEffect } from "react";
import SidebarService from "./SidebarService.jsx";
import "./servicedashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


import Button from "../Button.jsx";

const ServiceDashboard = () => {


  

  return (
    <div className="dashboard">
  
      <SidebarService />

      <div className="dashboardContainer">
        <Typography  component="h1">Service Dashboard</Typography>
        <div className="button">
        <Button title="Logout"/>
        </div>
        
        <div className="dashboardSummary">
          <div>
            <p >
              Add your Type of Service  
              
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/submitkyc">
              <p>Kyc</p>
              <p>Verify</p>
            </Link>
            <Link to="/service/orders">
              <p>Orders</p>
              <p>Request</p>
            </Link>
            <Link to="/service/reviews">
              <p>Reviews</p>
              <p>Comment</p>
            </Link>
          </div>
        </div>

       

        
      </div>
    </div>
  );
};

export default ServiceDashboard;
