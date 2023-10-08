import React from 'react'
import Navbar from '../Navbar.jsx'
import InfoSection from './InfoSection.jsx'
import Footer from './Footer.jsx'
import styles from "../../style.js";
import Aboutus from './Aboutus.jsx';
import Services from './Services.jsx';
import { navLinks } from '../../constants/index.js';
const Homepage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar title="subhakarya" navLinks={navLinks} buttontitle="Login"/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <InfoSection  />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Aboutus/>
        <Services />
        <Footer  />
      </div>
    </div>



  </div>
);
export default Homepage;
