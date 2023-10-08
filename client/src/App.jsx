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
import Products from './components/Product/Products.jsx';
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
import KycForm from './components/KycForm.jsx';
import TodoApp from './components/Users/TodoApp.jsx';
import KYC_review from './components/Admin/KYC_review.jsx';



 
export default function App() {

  // const { isAuthenticated, user } = useSelector((state) => state.user);
  
  return (
    <Router>
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/recovery" element={<Recovery/>}/>
      <Route exact path="*" element={<PageNotFound/>}/>
      <Route exact path="/verifykyc" element={<KycForm/>}/>
      <Route
  exact
  path="/whoareyou"
  element={
    <ProtectedRoute Component={Whoareyou} role="admin" />
  }
/>


      <Route exact path="/signupuser" element={<Signup_User/>}/>
      <Route exact path="/loginuser" element={<Login_User/>}/>


    
      <Route exact path="/userdashboard" element={<ProtectedRoute Component={UserDashboard} role="user" />}/>
      <Route exact path="/todolist" element={<ProtectedRoute Component={TodoApp} role="user" />}/>
      <Route exact path="/servicedashboard" element={<ProtectedRoute Component={ServiceDashboard} role="service" />}/>
      <Route exact path="/product/:id" element={<ProtectedRoute Component={ProductDetails} role="user" />}/>
      <Route exact path="/products" element={<ProtectedRoute Component={Products} role="user" />}/>
      <Route path="/products/:keyword"  element={<ProtectedRoute Component={Products} role="user" />}/>
      <Route exact path="/search"  element={<ProtectedRoute Component={Search} role="user" />}/>
      <Route exact path="/cart"  element={<ProtectedRoute Component={Cart} role="user" />}/>
      <Route exact path="/shipping"  element={<ProtectedRoute Component={Shipping} role="user" />}/>
      <Route exact path="/order/confirm" element={<ProtectedRoute Component={ConfirmOrder} role="user" />}/>
      <Route exact path="/process/payment"  element={<ProtectedRoute Component={Payment} role="user" />}/>
      <Route exact path="/sucess"  element={<ProtectedRoute Component={OrderSuccess} role="user" />}/>
     
       <Route exact path="/orders" element={<ProtectedRoute Component={MyOrders} role="user" />}/>
      <Route exact path="/order/:id" element={<ProtectedRoute Component={OrderDetails} role="user" />}/>
      
      
      {/* Admin Routes */}
      <Route exact
          path="/admindashboard"
          element={<ProtectedRoute Component={Dashboard} role="admin" />}
        />
        <Route
          exact
          path="/admin/products"
          element={<ProtectedRoute Component={ProductList} role="admin" />}
        />
         <Route
          exact
          path="/admin/product/:id"
          element={<ProtectedRoute Component={UpdateProduct} role="admin" />}
          />
           <Route
          exact
          path="/admin/users"
          element={<ProtectedRoute Component={UsersList} role="admin" />}
        />

          <Route
          exact
          path="/admin/reviews"
          element={<ProtectedRoute Component={ProductReviews} role="admin" />}
        />
          <Route
          exact
          path="/review/kyc"
          element={<ProtectedRoute Component={KYC_review} role="admin" />}
        />
        
        {/*
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
        /> */}

        {/* service routes */}
        <Route
          exact
          path="/service/add"
          element={<ProtectedRoute Component={NewProduct} role="service" />}
        />
       

      </Routes>
    </Router>
  )
}
