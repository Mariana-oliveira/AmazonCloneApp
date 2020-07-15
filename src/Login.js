import React from 'react'
import "./Login.css"
import { Link, useHistory} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon-logo.svg.png"
                alt="Amazon Logo"
            />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <label>E-mail</label>
                    <input type="email"/>

                    <label>Password</label>
                    <input type="password"/>

                    <button clasName="login__signInButton">Sign In</button>
                </form>
                
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based ads Notice.
                </p>

                <button clasName="login__registerButton">Create your Amazon Account</button>
            </div>
           
        </div>
    )
}

export default Login
