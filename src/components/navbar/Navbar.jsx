import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-full p-[20px] flex items-center">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>lamadmin</span>
      </div>
      <div className="icons flex items-center">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expand" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification"/>
          <span>1</span>
        </div>
        <div className="user flex items-center">
          <img src="/profile.jpg" alt="profile" className='img w-[26px] h-[26px] rounded-full object-cover' />
          <span>Vyom</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar