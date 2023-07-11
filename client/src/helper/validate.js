import toast from 'react-hot-toast'


/**validate register form */
export async function registerValidation(values){
    const errors =emailVerify({}, values);
    passwordVerify(errors, values);
    usernameVerify(errors,values);
    confirmPassword(errors,values);

    return errors;
}

//**validate recovery form */
export async function recoveryValidation(values){
    const errors =passwordVerify({}, values);
    confirmPassword(errors,values);
   

    return errors;
}
/** validate login form */
export async function loginValidation(values){
    const errors =emailVerify({}, values);
    passwordVerify(errors, values);

    return errors;
}



/** ************************************************* */

/** validate password */
function passwordVerify(errors = {}, values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!");
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 characters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
    }

    return errors;
}


/** validate username */
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!');
    }else if(values.username.length<4){
        error.username = toast.error('Invalid Username...!')
    }

    return error;
}


/** validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong Email...!")
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }

    return error;
}

/*confirm password validation*/
function confirmPassword(error = {}, values){
    if(!values.confirmPassword){
        error.confirmPassword = toast.error('Type password Again');
    }else if(values.password!=values.confirmPassword){
        error.confirmPassword = toast.error('password doesnot match')
    }

    return error;
}
