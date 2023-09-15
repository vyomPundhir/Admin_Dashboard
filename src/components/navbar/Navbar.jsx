import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>Admin</span>
      </div>
      <div className="icons flex">
        <img src="/serach.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notification.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user flex">
          <img src="/profile.jpg" alt="profile" />
          <span>Vyom</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar