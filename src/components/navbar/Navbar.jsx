import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar w-full p-[20px] flex items-center justify-between ">

      <div className="logo flex items-center font-[700]">
        <img src="logo.svg" alt="logo" />
        <span>lamadmin</span>
      </div>

      <div className="icons flex items-center gap-[20px]">

        <img src="/search.svg" alt="search" className="icon" />

        <img src="/app.svg" alt="app" className="icon" />

        <img src="/expand.svg" alt="expand" className="icon" />

        <div className="notification relative">
          <img src="/notifications.svg" alt="notification"/>
          <span className='flex items-center justify-center bg-[red] text-[white] w-[16px] h-[16px] rounded-full absolute top-[-10px] right-[-10px] text-[12px]'>1</span>
        </div>

        <div className="user flex items-center gap-[10px]">
          <img src="/profile.jpg" alt="profile" className='img w-[26px] h-[26px] rounded-full object-cover' />
          <span>Vyom</span>
        </div>

        <img src="/settings.svg" alt="settings" className="icon" />

      </div>

    </div>
  )
}

export default Navbar