import React from 'react'
import "./admin.css"
function adminlogin() {
  return (
    <div className='adminContainer'>
      <div className='adminForm'>
        <div className='logo'>

        </div>
        <input id='username' name='userName' placeholder='username'></input>
        <input id='password' name='password' placeholder='password'></input>
        <button className='button'>Giriş Yap</button>
      </div>
    </div>
  )
}

export default adminlogin