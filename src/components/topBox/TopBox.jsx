import React from 'react'
import {topDealUsers} from "../../data"

const TopBox = () => {
  return (
    <div className='topBox'>

      <h1 className='mb-[20px]'>Top Deals</h1>

      <div className="list">

        {topDealUsers.map(user=>(
          <div className="listItem flex items-center justify-between mb-[30px]" key={user.id}>

            <div className="user flex gap-[20px]">

              <img src={user.img} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>

              <div className="userTexts flex flex-col gap-[5px]">

                <span className="username text-[14px] font-[500]">{user.username}</span>

                <span className="email text-[12px]">{user.email}</span>

              </div>

            </div>

            <span className="amount font-[500]">${user.amount}</span>

          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox