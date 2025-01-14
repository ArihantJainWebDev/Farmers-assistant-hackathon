import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <div className='login-container'>
                <div className='heading'>
                    <h1>Login</h1>
                </div>
                <div className='login-input'>
                    <label>Phone:</label>
                    <input className='login-phone-input' type='number' placeholder='Enter your phone number' />
                </div>
                <div className='form-btn'>
                    <button>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login
