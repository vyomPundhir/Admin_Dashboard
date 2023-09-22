import React from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, DefaultTooltipContent } from 'recharts';

// const Props = {
//   color: string;
//   icon: string;
//   title: string;
//   dataKey: string;
//   number: number | string;
//   percentage: number;
//   chartData: object[];
// };


const ChartBox = (props) => {
  return (
    <div className="chartBox flex gap-[50px] w-[290px] h-full">
      <div className="boxInfo flex-3 flex flex-col justify-between">
        <div className="title flex items-center gap-[10px]">
          <img src={props.icon} alt="user" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color:props.color}}>View all</Link>
      </div>

      <div className="chartInfo flex-2 flex flex-col jutify-between">
        <div className="chart w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{background:"transparent", border:"none"}}
                labelStyle={{display:"none"}}
                position={{x:10, y: 70}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts flex flex-col text-right">
          <span className="percentage font-[700] text-[20px]"
            style={{color:props.percentage < 0 ? "tomato" : "limegreen"}}
          >{props.percentage}%</span>
          <span className="duration text-[14px]">this month</span>
        </div>
      </div>
    </div>
  )
}

export default ChartBox