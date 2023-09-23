import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';

const data = [
  {name: "Mobile", value: 400, color:"#0088fe"},
  {name: "Desktop", value: 300, color:"#00c49f"},
  {name:"Laptop", value: 300, color:"#ffbb28"},
  {name:"Tablet", value: 200, color:"#FF8042"}
];

const PieChartBox = () => {
  return (
    <div className="PieChartBox h-full flex flex-col justify-between">
      <h1>Leads by Source</h1>
      <div className="chart flex items-center justify-center w-full h-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{background:"white", borderRadius:"5px"}}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell
                  key={item.name}
                  fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="options flex justify-between gap-[10px] text-[14px] ml-[-5px]">
        {data.map(item=>(
          <div className="option flex text-[15px] flex-col gap-[10px] items-center" key={item.name}>
            <div className="title flex gap-[10px] text-[12px] items-center">
              <div className='dot w-[10px] h-[10px] rounded-full' style={{backgroundColor:item.color}}/>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChartBox