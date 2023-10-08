import React,{useEffect} from 'react'
import Navbar from '../Navbar.jsx'
import { usernavLinks } from '../../constants/index.js';
import styles from "../../style.js";
import Footer from '../Homepage/Footer.jsx'
import ProductCard from './ProductCard.jsx'
import "./userdashboard.css";
import {getProduct,clearErrors} from '../../actions/productAction.js';
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import store from "../../store";
import { loadUser } from "../../actions/userAction";



const UserDashboard = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {

    
    
   store.dispatch(loadUser());


    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
   
  }, [dispatch,error,alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
    <>
    <div className="bg-primary w-full overflow-scroll text-white">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
      <Navbar title="UserDashBoard" navLinks={usernavLinks} buttontitle="Logout"/>

     
      <div className="banner">
            <p>Welcome to Subhakarya</p>
            <h1>FIND AMAZING SERVICES HERE</h1>

          </div>

     
      

      <h2 className="text-center text-[1.4vmax] w-[20vmax] text-[rgba(251,255,255)] mx-auto my-[5vmax] p-[1vmax] border-b-[rgba(255,255,255,0.5)] border-b border-solid;
  font-family: poppins">Featured Services</h2>
      <div className="container" id="container">
      {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          
          </div>

          
      <Footer />
      </div>
    </div>
    
    </div>
    </>
      )}
    </>
    
  )
}

export default UserDashboard;


