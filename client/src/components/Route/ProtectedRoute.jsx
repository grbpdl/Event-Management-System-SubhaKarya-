

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';



const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate(); // Rename Navigate to navigate

  const loginStatus = async () => {
    try {
      const response = await axios.get('/currentUser', {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (response.data === false) {
        navigate("/loginuser");
      }
      // Add an else block if you want to navigate somewhere else when login is true
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error checking login status:", error);
    }
  }

  useEffect(() => {
    loginStatus();
  }, []); // Pass an empty dependency array to run the effect only once

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
