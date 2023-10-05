import React from 'react'

const Add = (props) => {

  const handleSubmit =(e) => {
    e.preventDefault()
  }

  return (
    <div className='add w-screen min-h-screen top-0 left-0 bg-[rebeccapurple] absolute flex items-center justify-center '>
      <div className="modal p-[50px] rounded-[10px] bg-[#2a3447] relative">
        <span className="close cursor-pointer absolute top-[10px] right-[10px]" onClick={()=>props.setOpen(false)} >X</span>
        <h1>Add new {props.slug}</h1>
        <form action="" onSubmit={handleSubmit}>
          {props.columns.filter((item) => item.field !=="id" && item.field !== "img").map(column=>(
            <div className="item">
              <label>{column.headerName}</label>
              <input type={column.type} placeholder={column.field} />
            </div>
          ))}

          <button>Send</button>

        </form>
      </div>
    </div>
  )
}

export default Add