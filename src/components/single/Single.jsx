import { Tooltip } from '@mui/material'
import React from 'react'
import {Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import "../single/Single.css"

const Single = (props) => {


  return (
    <div className="single flex">
      <div className="view flex-1">
        <div className="info">

          <div className="topInfo flex items-center gap-[20px]">
            {props.img && <img src={props.img} alt="" className='w-[100px] h-[100px] rounded-[20px] object-cover' />}
            <h1 className='font-[500]'>{props.title}</h1>
            <button>Update</button>
          </div>

          <div className="details text-[18px]">
            {Object.entries(props.info).map((item)=>(
              <div className="item mx-[0px] my-[30px]" key={item[0]}>
              <span className="itemTitle font-[600] mr-[10px] capitalize">{item[0]}</span>
              <span className="itemValue">{item[1]}</span>
            </div>
            ))}
            


          </div>
        </div>

        <hr className='w-9/10 h-0 border-[0.5px] border-[gray] my-[20px] mx-[0px]' />

        {props.chart && <div className="chart mt-[50px] w-4/5 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((dataKey)=>(
                <Line type="monotone"
                dataKey={dataKey.name} 
                stroke={dataKey.color} 
                />
              ))}
              
            </LineChart>
          </ResponsiveContainer>
        </div>}
      </div>


      <div className="activities flex-1">
        <h2 className='mb-[20px]'>
          Latest Activities
        </h2>
        {props.activities && (<ul>
          {props.activities.map((activity) =>(
            <li key={activity.text} className='list-item list-none relative w-[1px] pt-[50px] bg-[#f45b69] '>
              <div className='min-w-[480px] p-[15px] bg-[#f45b6810]'>
                <p className='mb-[5px]'>{activity.text}</p>
                <time className='text-[12px]'>
                  {activity.time}
                </time>
              </div>
            </li>
          ))}
        </ul>)}
      </div>
    </div>
  )
}

export default Single