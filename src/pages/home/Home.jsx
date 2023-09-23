import React from 'react'
import TopBox from '../../components/topBox/TopBox'
import ChartBox from '../../components/chartBox/ChartBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'


const Home = () => {
  return (
    <div className='home grid gap-[20px] grid-cols-4 auto-rows-[minmax(180px,auto)]'>

      <div className="box box1 col-span-1 row-span-3 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <TopBox />
      </div>

      <div className="box box2 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <ChartBox {...chartBoxUser}/>
      </div>

      <div className="box box3 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <ChartBox {...chartBoxProduct}/>
      </div>

      <div className="box box4 col-span-1 row-span-3 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <PieChartBox/>
      </div>

      <div className="box box5 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <ChartBox {...chartBoxConversion}/>
      </div>

      <div className="box box6 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <ChartBox {...chartBoxRevenue}/>
      </div>

      <div className="box box7 col-span-2 row-span-2 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <BigChartBox/>
      </div>

      <div className="box box8 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <BarChartBox {...barChartBoxVisit}/>
      </div>

      <div className="box box9 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
      <BarChartBox {...barChartBoxRevenue}/>
      </div>

    </div>
  )
}

export default Home