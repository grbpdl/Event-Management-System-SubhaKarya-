import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';

import axios from '../../api/axios';
const REGISTER_SERVICE_URL = '/service/register';

export default function Signup_Service() {
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {


            try {
                setLoading(true);
                const response = await axios.post(REGISTER_SERVICE_URL,
                    JSON.stringify({ servicename: values.username, email: values.email, password: values.password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                if (response.status == 200)
                {
                    setLoading(false);
                    toast.success("email sent sucessfully")
                    setSuccess(true);
                }
            } catch (err) {
                setLoading(false);

                toast.error(err.response.data.msg)


            }

        }
    })
    return (
        <>
            {
                success ? (
                    <section>
                        <h1>Sucess now verify your mail and proceed to login!</h1>
                        <p>
                            <a href="/loginservice">Login</a>
                        </p>
                    </section>
                ) : (

                    <div className='bg-primary w-full'>
                        <Toaster position='center' reverseOrder={false} className="bg-white"></Toaster>
                        <div className="bg-primary w-full flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
                            <div>
                                <a href="/">
                                    <h1 className=" font-poppins cursor-pointer text-[30px] text-white text-gradient">Signup Service</h1>
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
                                            href="/loginservice"
                                        >
                                            Already registered?
                                        </a>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center px-4 py-2 ml-4 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                        >
                                            {loading ? <>
                                                <div role="status">
                                                    <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            </> : <>Register</>}

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

