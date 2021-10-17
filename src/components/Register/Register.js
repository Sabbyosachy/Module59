import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="container login-form">
            <div>
            <h2>Register</h2>
            <form onSubmit="">
               <input className="mt-2" type="email" placeholder="Email" />
               <br />
               <input className="mt-2" type="password" placeholder="Password" />
               <br />
               <input className="mt-2" type="password" placeholder="Re-enter-Password" />
               <br />
               <input className="mt-2" type="submit" value="Submit" />
            </form>
            <p>Already register ? <Link to="/login">Login Account</Link></p>
            <button className="btn-warning px-3 py-1 fw-bold ">Google Signin</button>
            </div>
           
        </div>
        </div>
    );
};

export default Register;