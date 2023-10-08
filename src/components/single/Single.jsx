import { Tooltip } from '@mui/material'
import React from 'react'
import {Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Single = () => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="single flex">
      <div className="view flex-1">
        <div className="info">

          <div className="topInfo flex items-center gap-[20px]">
            <img src="" alt="" className='w-[100px] h-[100px] rounded-[20px] object-cover' />
            <h1 className='font-[500]'>John Doe</h1>
            <button>Update</button>
          </div>

          <div className="details text-[18px]">
            <div className="item mx-[0px] my-[30px]">
              <span className="itemTitle font-[600] mr-[10px] capitalize">Username:</span>
              <span className="itemValue">John Doe</span>
            </div>

            <div className="item mx-[0px] my-[30px]">
              <span className="itemTitle font-[600] mr-[10px] capitalize">Username:</span>
              <span className="itemValue">John Doe</span>
            </div>

            <div className="item mx-[0px] my-[30px]">
              <span className="itemTitle font-[600] mr-[10px] capitalize">Username:</span>
              <span className="itemValue">John Doe</span>
            </div>

          </div>
        </div>

        <hr className='w-9/10 h-0 border-[0.5px] border-[gray] my-[20px] mx-[0px]' />

        <div className="chart mt-[50px] w-4/5 h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
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
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>


      <div className="activities flex-1">
        <h2 className='mb-[20px]'>
          Latest Activities
        </h2>
        <ul>
          <li className='list-none relative w-[1px] pt-[5px] bg-[#f45b69] '>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>
                3 days ago.
              </time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>
                3 days ago.
              </time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>
                3 days ago.
              </time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Single