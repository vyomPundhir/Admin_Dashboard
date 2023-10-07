import React, { useState } from 'react'
import DataTable from '../../components/dataTable/DataTable'
import Add from '../../components/add/Add'
import { products } from '../../data';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img className='w-[32px] h-[32px] rounded-full object-cover' src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="products">
      <div className="info flex items-center gap-[20px] mb-[20px]">
        <h1 className='text-[30px] font-[700]'>Products</h1>
        <button type="button" className='p-[5px] cursor-pointer rounded-[5px] bg-[#f0f0f0] text-[black] font-[500]'
        onClick={()=>setOpen(true)}>
          Add New Products
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={products}/>
      {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Products