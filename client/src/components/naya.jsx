
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { recoveryValidation } from '../helper/validate';
import axios from '../api/axios';
const UPDATE_URL = 'forgot/update';
const RESET_URL = 'forgot/reset';
export default function Recovery() {
  const [success, setSuccess] = useState(false);
  const [mail, setEmail] = useState('');
  const sendOtp = async  (mail) => {  
    //code for sending otp
    try {
      console.log(1)
       toast.loading("validating and sending email")
      const response = await axios.post(RESET_URL,
        JSON.stringify({email:mail}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(2)
      console.log(response)
        if(response.status==200)
        {
          console.log(3)
          toast.success(response.data.msg)
          setSuccess(true);
    }
  
    } catch (err) {
      console.log(4)
      toast.error(response.err.data.msg)
     
  
  
    }
  }
 
 
  const formik = useFormik({
    initialValues: {
      email:'',
      otp: '',
      password: '',
      confirmPassword: ''
    },
    validate: recoveryValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {

      console.log(values)
      try {
        const response = await axios.post(UPDATE_URL,
          JSON.stringify({ email:values.email, code: values.otp, password: values.password }),
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
          }
        );
        if(response.status==200)
        toast.success(response.data.msg)
        
      } catch (err) {

        toast.error(err.response.data.msg)
        


      }

    }
  })
  return (
    <>
      {
      success ? (
        <div className='bg-primary w-full'>
          <Toaster position='center' reverseOrder={false} className="bg-white"></Toaster>
          <div className="bg-primary w-full flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
            <div>
              <a href="/">
                <h1 className=" font-poppins cursor-pointer text-[30px] text-white text-gradient">New password</h1>
              </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
              <form onSubmit={formik.handleSubmit}>
              <div className="mt-4">
                  <label
                    htmlFor="otp"
                    className="block text-sm font-poppins text-gray-700 undefined"
                  >
                    Enter OTP
                  </label>
                  <div className="flex flex-col items-start">
                    <input {...formik.getFieldProps('otp')}
                      type="otp"
                      name="otp"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="password"

                    className="block text-sm font-poppins text-gray-700 undefined"
                  >
                    New Password
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
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 ml-4 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Confirm Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className='bg-primary w-full'>
          <Toaster position='center' reverseOrder={false} className="bg-white"></Toaster>
          <div className="bg-primary w-full flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
            <div>
              <a href="/">
                <h1 className=" font-poppins cursor-pointer text-[30px] text-white text-gradient">Recovery</h1>
              </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
              <form>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-poppins text-gray-700 undefined"
                  >
                    Email
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                    {...formik.getFieldProps('email')}
                      type="email"
                      name="email"
                      value={mail}
                      onChange={(e)=>setEmail(e.target.value)
                      }
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                  <button onClick={()=>sendOtp(mail)}
                    className="inline-flex items-center px-4 py-2 ml-4 font-poppins tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Send OTP
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


