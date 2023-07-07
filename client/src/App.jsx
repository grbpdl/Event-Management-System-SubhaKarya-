import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Homepage from './components/Homepage.jsx';
import Password from './components/Password.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';
import Recovery from './components/Recovery.jsx';
import Reset from './components/Reset.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Whoareyou from './components/Whoareyou.jsx';
import Login_User from './components/Login_User.jsx';
import Signup_User from './components/Signup_User.jsx';
import Login_Admin from './components/Login_Admin.jsx';
import Login_Service from './components/Login_Service.jsx';
import Signup_Service from './components/Signup_Service.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';



/** root routes all the routes necessary for fronend */
{/** creating necessary routes which returns the specefic element to be rendered to router porvider */}
const router = createBrowserRouter([
  {
      path : '/',
      element : <Homepage></Homepage>
  },
  {
      path : '/register',
      element : <Register></Register>
  },
  {
      path : '/password',
      element : <Password />
  },
  {
      path : '/profile',
      element : <Profile />
  },
  {
      path : '/recovery',
      element : <Recovery></Recovery>
  },
  {
      path : '/reset',
      element : <Reset></Reset>
  },
 
  {
      path : '*',
      element : <PageNotFound></PageNotFound>
  },
  {
    path : '/whoareyou',
    element : <Whoareyou></Whoareyou>
},
{
  path : '/loginadmin',
  element : <Login_Admin></Login_Admin>
},
{
  path : '/loginuser',
  element : <Login_User></Login_User>
},
{
  path : '/signupuser',
  element : <Signup_User></Signup_User>
},
{
  path : '/loginservice',
  element : <Login_Service></Login_Service>
},
{
  path : '/signupservice',
  element : <Signup_Service></Signup_Service>
},
{
  path : '/admindashboard',
  element : <AdminDashboard></AdminDashboard>
},
])
 
export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider> {/** it returns the element according to the route */}
    </main>
  )
}
