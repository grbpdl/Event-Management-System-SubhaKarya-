import React, { Fragment ,useEffect} from "react";
import "./Cart.css";
import Navbar from '../Navbar.jsx'
import { usernavLinks } from '../../constants/index.js';
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import store from "../../store";
import { loadUser } from "../../actions/userAction";
import { useAlert } from "react-alert";

const Cart = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
if (user.kycverified===true)
    navigate("/shipping");
  
  else
  alert.show(`Kyc not verified`)
};

  useEffect(() => {
   store.dispatch(loadUser());

  },[]);

  return (
    <Fragment>
      <div className="bg-primary w-full h-screen overflow-scroll">
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>Nothing in Your Cart</Typography>
          <Link to="/products">View Services</Link>
          <Link to="/orders">View Orders</Link>
        </div>
        
      ) : (
        <Fragment>
          <div className="bg-primary w-full  overflow-hidden">
          <Navbar title="" navLinks={usernavLinks} buttontitle="Logout"/>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                    <input type="number" value={1} readOnly />
                    </div>
                  <p className="cartSubtotal">{`Rs${
                    item.price
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`Rs${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
          </div>
        </Fragment>
      )}
      </div>
    </Fragment>
  );
};

export default Cart;
