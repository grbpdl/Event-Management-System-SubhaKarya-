import {useState,useEffect,Fragment} from 'react'
import { Toaster,toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { loginValidation } from '../../helper/validate';
import axios from '../../api/axios';
const LOGIN_USER_URL = '/user/login';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../actions/userAction";
import { useAlert } from "react-alert";
import Loader from "../layout/Loader/Loader";



export default function Login_User() {
    const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const role = useSelector((state) => state.user.role);
    
    
    const formik = useFormik({
        initialValues : {
            email: '',
            password:''
        },
        validate:loginValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit :  async values => {
            dispatch(login(values.email, values.password));
            
        //     try {
        //         const response = await axios.post(LOGIN_USER_URL,
        //             JSON.stringify({email:values.email,password:values.password}),
        //             {
        //                 headers: { 'Content-Type': 'application/json' },
        //                 withCredentials: true
        //             }
        //         );


        //         toast.success("logged in")
        //         if(response?.data?.user?.role=="user")
        //         navigate('/userdashboard')
        //         if(response?.data?.user?.role=="service")
        //         navigate('/servicedashboard')
        //         if(response?.data?.user?.role=="admin")
        //         navigate('/admindashboard')
                
               
        //     } catch (err) {
                
        //         toast.error(err.response.data.msg)
        //  }
        }
    })
    
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        if (isAuthenticated) {
            // Redirect based on the user's role
        
            if (role === 'user') {
              navigate('/userdashboard');
            } else if (role === 'service') {
              navigate('/servicedashboard');
            } else if (role === 'admin') {
              navigate('/admindashboard');
            }
          }
        }, [dispatch, error, alert,navigate, isAuthenticated, role]);
      
    
        
        
      
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
   
      
   
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-primary">
        
    <div className="w-full p-6 m-auto bg-white   rounded-md shadow-md lg:max-w-xl">
    <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
    <h1 className="font-poppins font-normal cursor-pointer text-[30px] text-white text-gradient">Login</h1>
        <form className="mt-6 bg-white rounded-md shadow-md p-6 m-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-2">
                <label
                    htmlFor="email"
                    className="block text-sm font-poppins text-gray-800"
                >
                    Email
                </label>
                <input {...formik.getFieldProps('email')}
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="password"
                    className="block text-sm font-poppins text-gray-800"
                >
                    Password
                </label>
                <input {...formik.getFieldProps('password')}
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <a
                href="/recovery"
                className="text-xs text-purple-600 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>

        <p className="mt-8 text-xs font-poppins text-primary text-center">
            {" "}
            Don't have an account?{" "}
            <a
                href="/signupuser"
                className="font-medium text-purple-600 hover:underline"
            >
                Sign up
            </a>
        </p>
    </div>

</div>

    </Fragment>
    )}
  </Fragment>

  )
};
