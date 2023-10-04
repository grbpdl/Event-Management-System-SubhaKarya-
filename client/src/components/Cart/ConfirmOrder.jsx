import React, { Fragment, useEffect } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import store from "../../store";
import { loadUser } from "../../actions/userAction";
const ConfirmOrder = () => {
  useEffect(() => {
    
    store.dispatch(loadUser());
    

  }, []);
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
 
  const subtotal = cartItems.reduce(
    (acc, item) => acc + 1 * item.price,
    0
  );
const username=user?.username;
  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };

  return (
    <Fragment>
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                  <span>{username}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography  className="text-white">Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      1 X Rs.{item.price} ={" "}
                      <b>Rs{item.price * 1}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography className="text-white">Order Summery</Typography>
            <div className="text-white">
              <div >
                <p>Subtotal:</p>
                <span>Rs{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>Rs{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>Rs{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p className="text-white">
                <b>Total:</b>
              </p>
              <span className="text-white">Rs{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
