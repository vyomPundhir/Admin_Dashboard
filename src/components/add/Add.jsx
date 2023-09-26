import React from 'react'

const Add = (props) => {
  return (
    <div className='add'>
      <div className="modal">
        <span className="close" onClick={()=>props.setOpen(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form action="">
          {props.columns.filter((item) => item.field !=="id" && item.field !== "img").map(column=>(
            <div className="item">
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
          ))}
        </form>
      </div>
    </div>
  )
}

export default Add