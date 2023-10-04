import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

/** import all components */
import Homepage from './components/Homepage/Homepage.jsx';
import Recovery from './components/Recovery.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Whoareyou from './components/Whoareyou.jsx';
import Login_User from './components/Users/Login_User.jsx';
import Signup_User from './components/Users/Signup_User.jsx';
import UserDashboard from './components/Users/UserDashboard.jsx';
import ServiceDashboard from './components/Service/ServiceDashboard.jsx';
import ProductDetails from './components/Product/ProductDetails.jsx';
import Products from './components/Product/products.jsx';
import Search from './components/Product/Search.jsx';
import Cart from './components/Cart/Cart.jsx';
import Shipping from './components/Cart/Shipping.jsx';
import ConfirmOrder from './components/Cart/ConfirmOrder.jsx';
import Payment from './components/Cart/Payment.jsx';
import OrderSuccess from './components/Cart/OrderSuccess.jsx';
import MyOrders from "./components/Order/MyOrders.jsx";
import OrderDetails from "./components/Order/OrderDetails.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import ProductList from "./components/Admin/ProductList.jsx";
import NewProduct from "./components/Service/NewProduct";
import UpdateProduct from "./components/Admin/UpdateProduct";
// import OrderList from "./components/Admin/OrderList";
// import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
// import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
// import UserOptions from "./components/layout/Header/UserOptions";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import store from "./store";
import { loadUser } from "./actions/userAction";


 
export default function App() {

  // const { isAuthenticated, user } = useSelector((state) => state.user);
  
  return (
    <Router>
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/recovery" element={<Recovery/>}/>
      <Route exact path="*" element={<PageNotFound/>}/>
      <Route
  exact
  path="/whoareyou"
  element={
    <ProtectedRoute Component={Whoareyou} />
  }
/>


      <Route exact path="/signupuser" element={<Signup_User/>}/>
      <Route exact path="/loginuser" element={<Login_User/>}/>


    
      <Route exact path="/userdashboard" element={<ProtectedRoute Component={UserDashboard} />}/>
      <Route exact path="/servicedashboard" element={<ServiceDashboard/>}/>
      <Route exact path="/product/:id" element={<ProductDetails/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route path="/products/:keyword" element={<Products/>}/>
      <Route exact path="/search" element={<Search/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/shipping" element={<Shipping/>}/>
      <Route exact path="/order/confirm" element={<ConfirmOrder/>}/>
      <Route exact path="/process/payment" element={<Payment/>}/>
      <Route exact path="/sucess" element={<OrderSuccess/>}/>
     
       <Route exact path="/orders" element={<MyOrders/>} />
      <Route exact path="/order/:id" element={<OrderDetails/>} /> 
      
      
      {/* Admin Routes */}
      <Route exact
          path="/admindashboard"
          // isAdmin={true}
          element={<Dashboard/>}
        />
        <Route
          exact
          path="/admin/products"
          // isAdmin={true}
          element={<ProductList/>}
        />
         <Route
          exact
          path="/admin/product/:id"
          // isAdmin={true}
          element={<UpdateProduct/>}
          />
           <Route
          exact
          path="/admin/users"
          // isAdmin={true}
          element={<UsersList />}
        />

          <Route
          exact
          path="/admin/reviews"
          // isAdmin={true}
          element={<ProductReviews/>}
        />
        
        {/*
          <Route
          exact
          path="/admin/orders"
          // isAdmin={true}
          element={<OrderList/>}
        />

        

       
        />
        <Route
          exact
          path="/admin/orders"
          // isAdmin={true}
          element={<OrderList/>}
        />

        <Route
          exact
          path="/admin/order/:id"
          // isAdmin={true}
          element={<ProcessOrder />}
        />
       

        <Route
          exact
          path="/admin/user/:id"
          // isAdmin={true}
          element={<UpdateUser/>}
        />

        <Route
          exact
          path="/admin/reviews"
          // isAdmin={true}
          element={<ProductReviews/>}
        /> */}

        {/* service routes */}
        <Route
          exact
          path="/service/add"
          element={<NewProduct/>}
        />

      </Routes>
    </Router>
  )
}
