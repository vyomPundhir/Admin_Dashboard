import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartBox = (props) => {
  return (
    <div className="barChartBox w-full h-full">

      <h1 className='text-[20px] mb-[20px]'>{props.title}</h1>

      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{background:"#2a3447", borderRadius:"5px"}}
              labelStyle={{display:"none"}}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartBox