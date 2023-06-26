import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Homepage from './components/Homepage.jsx';
import Password from './components/Password.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';
import Recovery from './components/Recovery.jsx';
import Reset from './components/Reset.jsx';
import Login from './components/Login.jsx';
import PageNotFound from './components/PageNotFound.jsx';
import Whoareyou from './components/Whoareyou.jsx';



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
    path : '/login',
    element : <Login></Login>
},
  {
      path : '*',
      element : <PageNotFound></PageNotFound>
  },
  {
    path : '/whoareyou',
    element : <Whoareyou></Whoareyou>
},
])
 
export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider> {/** it returns the element according to the route */}
    </main>
  )
}
