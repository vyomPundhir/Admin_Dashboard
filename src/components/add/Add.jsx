// import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'

const Add = (props) => {

  // const queryClient = useQueryClient();
  
  // const mutation = useMutation({
  //   mutationFn:()=>{
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method:"post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id:111,
  //         img:"",
  //         lastName:"Hello",
  //         firstName:"Test",
  //         email: "testme@gmail.com",
  //         phone:"123 456 789",
  //         createdAt: "01.02.2023",
  //         verified: true,
  //       }),
  //     }); 
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   }
  // }); 

  const handleSubmit =(e) => {
    e.preventDefault()
  }

  // add new item
  // mutation.mutate();
  // props.setOpen(false)

  return (
    <div className='add w-full h-[1134.5px] top-0 left-0 bg-[rgba(0,0,0,0.724)] absolute flex items-center justify-center '>
      <div className="modal p-[50px] rounded-[10px] bg-[#2a3447] relative">
        <span className="close cursor-pointer absolute top-[10px] right-[10px]" onClick={()=>props.setOpen(false)} >X</span>
        <h1 className='mb-[40px] text-[24px] text-[#ddd]' >
          Add new {props.slug}
        </h1>
        <form action="" onSubmit={handleSubmit} className='flex max-w-[500px] justify-between flex-wrap'>
          {props.columns.filter((item) => item.field !=="id" && item.field !== "img").map(column=>(
            <div className="item flex flex-col gap-[10px] mb-[20px] w-2/5">
              <label className='text-[14px]' >{column.headerName}</label>
              <input type={column.type} placeholder={column.field} className='p-[10px] bg-transparent text-white outline-none border-[1px] border-solid border-[#ddd] rounded-[3px]' />
            </div>
          ))}

          <button className='w-full p-[10px] cursor-pointer text-black font-[700] bg-[white]'>Send</button>

        </form>
      </div>
    </div>
  )
}

export default Add