import React from 'react'

const LoginPage = () => {
  return (
    <div className='container'>
      <h3>Login System</h3>
      <form >
        <label htmlFor="username">Username</label>
        <input type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <a href="/">Forgot password</a>
        <button>Login</button>
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default LoginPage;