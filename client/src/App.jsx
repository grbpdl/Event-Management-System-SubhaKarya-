import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


/** import all components */
import Homepage from './components/Homepage/Homepage.jsx';
import Recovery from './components/Recovery.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Whoareyou from './components/Whoareyou.jsx';
import Login_User from './components/Users/Login_User.jsx';
import Signup_User from './components/Users/Signup_User.jsx';
import Login_Admin from './components/Admin/Login_Admin.jsx';
import Login_Service from './components/Service/Login_Service.jsx';
import Signup_Service from './components/Service/Signup_Service.jsx';
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
// import MyOrders from "./components/Order/MyOrders.jsx";
// import OrderDetails from "./components/Order/OrderDetails.jsx";
// import Dashboard from "./components/Admin/Dashboard.jsx";
// import ProductList from "./components/Admin/ProductList.jsx";
// import NewProduct from "./components/Admin/NewProduct";
// import UpdateProduct from "./components/Admin/UpdateProduct";
// import OrderList from "./components/Admin/OrderList";
// import ProcessOrder from "./components/Admin/ProcessOrder";
// import UsersList from "./components/Admin/UsersList";
// import UpdateUser from "./components/Admin/UpdateUser";
// import ProductReviews from "./components/Admin/ProductReviews";




 
export default function App() {
  
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/recovery" element={<Recovery/>}/>
      <Route exact path="*" element={<PageNotFound/>}/>
      <Route exact path="/whoareyou" element={<Whoareyou/>}/>
      <Route exact path="/loginadmin" element={<Login_Admin/>}/>
      <Route exact path="/signupuser" element={<Signup_User/>}/>
      <Route exact path="/loginuser" element={<Login_User/>}/>
      <Route exact path="/signupservice" element={<Signup_Service/>}/>
      <Route exact path="/loginservice" element={<Login_Service/>}/>
    
      <Route exact path="/userdashboard" element={<UserDashboard/>}/>
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
      {/* <Route exact path="/orders" component={<MyOrders/>} />
      <Route exact path="/order/:id" component={<OrderDetails/>} /> */}
      
      {/* <Route
          // isAdmin={true}
          exact
          path="/admin/dashboard"
          component={<Dashboard/>}
        />
        <Route
          exact
          path="/admin/products"
          // isAdmin={true}
          component={<ProductList/>}
        />
        <Route
          exact
          path="/admin/product"
          // isAdmin={true}
          component={<NewProduct/>}
        />

        <Route
          exact
          path="/admin/product/:id"
          // isAdmin={true}
          component={<UpdateProduct/>}
        />
        <Route
          exact
          path="/admin/orders"
          // isAdmin={true}
          component={<OrderList/>}
        />

        <Route
          exact
          path="/admin/order/:id"
          // isAdmin={true}
          component={<ProcessOrder />}
        />
        <Route
          exact
          path="/admin/users"
          // isAdmin={true}
          component={<UsersList />}
        />

        <Route
          exact
          path="/admin/user/:id"
          // isAdmin={true}
          component={<UpdateUser/>}
        />

        <Route
          exact
          path="/admin/reviews"
          // isAdmin={true}
          component={<ProductReviews/>}
        /> */}

      </Routes>
    </Router>
  )
}
