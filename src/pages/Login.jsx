import React from 'react'
export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Chatty</span>
        <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}
