import React from 'react'
import TopBox from '../../components/topBox/TopBox'


const Home = () => {
  return (
    <div className=' home grid gap-[20px] grid-cols-4 auto-rows-[minmax(180px,auto)]'>
      <div className="box box1 col-span-1 row-span-3 p-[20px] rounded-[10px] border-[1px] border-[#384256]">
        <TopBox />
      </div>
      <div className="box box2 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box2</div>
      <div className="box box3 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box3</div>
      <div className="box box4 col-span-1 row-span-3 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box4</div>
      <div className="box box5 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box5</div>
      <div className="box box6 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box6</div>
      <div className="box box7 col-span-2 row-span-2 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box7</div>
      <div className="box box8 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box8</div>
      <div className="box box9 p-[20px] rounded-[10px] border-[1px] border-[#384256]">Box9</div>
    </div>
  )
}

export default Home