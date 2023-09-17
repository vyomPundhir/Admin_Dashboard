import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
      <div className="item flex flex-col gap-[10px] mb-[20px]">
        <span className="title text-[12px] font-[200] text-[#ddd] ">MAIN</span>

        <Link to="/" className='listItem'>
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>

        <Link to="/" className='listItem'>
          <img src="/profile.svg" alt="" />
          <span className="ListItemTitle">Profile</span>
        </Link>

      </div>

      <div className="item flex flex-col gap-[10px] mb-[20px]">
        <span className="title text-[12px] font-[200] text-[#ddd]">MAIN</span>

        <Link to="/" className='listItem'>
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>

        <Link to="/"  className='listItem flex items-center gap-[10px] p-[10px] rounded-[5px]'>
          <img src="/profile.svg" alt=""/>
          <span className="ListItemTitle">Profile</span>
        </Link>
        
      </div>
    </div>
  )
}

export default Menu