import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>GupShup</span>
      <div className='user'>
        <img src="https://avatars.githubusercontent.com/u/74846797" alt=""/>
        <span>Shashwat</span>
        <button>logout</button>
      </div>
    </div>
  )
}
export default Navbar