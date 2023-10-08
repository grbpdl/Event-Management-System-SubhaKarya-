import React from "react";
import "./sidebar.css";
import {sklogo} from "../../assets/index";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={sklogo} alt="Subhakarya" />
      </Link>
      <Link to="/admindashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p>
          <PostAddIcon /> 
          Products
        </p>
      </Link>
      
      <Link to="/review/kyc">
        <p>
          <VerifiedUserIcon />
          Review Kyc
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
