import React from 'react'
import { Link } from 'react-router-dom'
import {menu} from "../../data"

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item)=>(

        <div className="item flex flex-col gap-[10px] mb-[20px]" key={item.id}>
          <span className="title text-[15px] font-[200] text-[#ddd] ">{item.title}</span>

          {item.listItems.map((listItem)=>(
            <Link to="/" className='listItem flex items-center gap-[10px] p-[10px] rounded-[5px] hover:bg-[#384256]' key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>

      ))}      
    </div>
  )
}

export default Menu