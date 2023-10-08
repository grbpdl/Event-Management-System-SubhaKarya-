
import React, { useState } from 'react';
import './KycForm.css'
import axios from '../api/axios';
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router-dom";

const KycForm = () => {
  const alert = useAlert()
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [images, setImages] = useState([]);

  
  

  
  const kycformsubmit =async (e) => {
    e.preventDefault();


    const myForm = new FormData();

    myForm.set("firstname", firstName);
    myForm.set("lastName", lastName);
    myForm.set("dateOfBirth", dateOfBirth);
    myForm.set("streetAddress", streetAddress);
    myForm.set("city", city);
    myForm.set("state", state);
   

    images.forEach((image) => {
      myForm.append("images", image);
    });
   

    
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true
    };
try{
    const response  = await axios.post(
      `/user/submit/kyc`,
      myForm,
      config
    );
    if(response.status==200)
    {
    alert.show(response.data.message)
    if(response.data.role==="user")
    navigate('/userdashboard')
    if(response.data.role==="service")
    navigate('/servicedashboard')

  }



    }
    catch(error)
    {
      alert.show(`Error occured while submitting the KYC`)
      
    }
  }

    

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    
    });
  };

 
 

  return (
    <div className="kyc-form-container">
      <h1 className="form-title">Kyc Form</h1>
      <form 
      className="kyc-form"
      encType="multipart/form-data"
      onSubmit={kycformsubmit}
        >
        <div className="form-section">
          <h2>Personal Details</h2>
          <div className="form-field">
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
          </div>
          <div className="form-field">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Address</h2>
          <div className="form-field">
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              
            />
          </div>
          <div className="form-field">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              
            />
          </div>
          <div className="form-field">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
             
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Documents</h2><h6>(upload any identification document like citizenship,passport,liscense etc.)</h6>
          <div className="form-field">
          <input
                type="file"
                name="image"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
          </div>
        </div>

        <button
          type="submit"
          className="submit-button"
          
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default KycForm;