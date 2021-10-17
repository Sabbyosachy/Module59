import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const {SignInUsingGoogle}=useAuth();
    return (
        <div className="container login-form">
            <div>
            <h2>Login</h2>
            <form onSubmit="">
               <input className="mt-2" type="email" placeholder="Email" />
               <br />
               <input className="mt-2" type="password" placeholder="Password" />
               <br />
               <input className="mt-2" type="submit" value="Submit" />
            </form>
            <p>New to amazon ? <Link to="/register">Create Account</Link></p>
            <button onClick={SignInUsingGoogle} className="btn-warning px-3 py-1 fw-bold">Google Signin</button>
            </div>
           
        </div>
    );
};

export default Login;