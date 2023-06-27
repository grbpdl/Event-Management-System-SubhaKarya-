import React from 'react'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';

export default function Signup_User() {
    const formik = useFormik({
        initialValues : {
            username:'',
            email: '',
            password:'',
            confirmPassword:''
        },
        validate:registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            console.log(values)
        }
    })
  return (
   
        <div className='bg-primary w-full'>
              <Toaster  position='center' reverseOrder={false} className="bg-white"></Toaster>
            <div className="bg-primary w-full flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
                <div>
                    <a href="/">
                    <h1 className=" font-poppins cursor-pointer text-[30px] text-white text-gradient">Signup User</h1>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                            
                                className="block text-sm font-poppins text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input {...formik.getFieldProps('username')}
                                    type="text"
                                    name="username"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-poppins text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input {...formik.getFieldProps('email')}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                
                                className="block text-sm font-poppins text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input {...formik.getFieldProps('password')}
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                
                                className="block text-sm font-poppins text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input {...formik.getFieldProps('confirmPassword')}  
                                    type="password"
                                    name="confirmPassword"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a
                                className="text-sm font-poppins text-gray-600 underline hover:text-gray-900"
                                href="/loginuser"
                            >
                                Already registered?
                            </a>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
  
