import React from "react";
import "./sidebarservice.css";
import {sklogo} from "../../assets/index";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const SidebarService = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={sklogo} alt="Subhakarya" />
      </Link>
      <Link to="/servicedashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/service/add">
        <p>
          <PostAddIcon /> 
          Add Service
        </p>
      </Link>
      
      <Link to="/verifykyc">
        <p>
          <VerifiedUserIcon />
          Verify Kyc
        </p>
      </Link>
      <Link to="/service/orders">
        <p>
          <PeopleIcon /> Orders
        </p>
      </Link>
      {/* <Link to="/service/reviews">
        <p>
          <RateReviewIcon />
          See Reviews
        </p>
      </Link> */}
    </div>
  );
};

export default SidebarService;
