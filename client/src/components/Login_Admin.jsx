import React from 'react'
import { Toaster,toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { loginValidation } from '../helper/validate';
import axios from 'axios';


export default function Login_Admin() {
    const formik = useFormik({
        initialValues : {
            email: '',
            password:''
        },
        validate:loginValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
           axios.post('http://localhost:3000/admin/login',{
            email:values.email,
            password:values.password
           })
           .then(result=>{
            if(result.status==200)
            {
                
                toast.success("logged in")
                
            }
            else
            {
                toast.error("invalid");  
            }
           })
           .catch(error=>{
            toast.error("invalid");
           })
        }
    })
    return (

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-primary">
        
            <div className="w-full p-6 m-auto lg:max-w-xl">
            <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
                <h1 className="text-3xl font-poppins text-center text-gradient ">
                   Admin Login
                </h1>
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
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

            </div>
        
    </div>
  )
}


