import React, { useState } from 'react'
import DataTable from '../../components/dataTable/DataTable'
import { userRows } from '../../data';
import Add from '../../components/add/Add';
import { useQuery } from '@tanstack/react-query';

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img className='w-[32px] h-[32px] rounded-full object-cover' src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {

  const [open, setOpen] = useState(false)

  const { isLoading, data } = useQuery({
    queryKey: ['allusers'],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then(
        (res) => res.json(),
      ),
  })

  return (
    <div className="users">
      <div className="info flex items-center gap-[20px] mb-[20px]">
        <h1 className='text-[30px] font-[700]'>Users</h1>
        <button type="button" className='p-[5px] cursor-pointer rounded-[5px] bg-[#f0f0f0] text-[black] font-[500]'
        onClick={()=>setOpen(true)}>
          Add New User
        </button>
      </div>
      {isLoading ? "Loading..." : (
        <DataTable slug="users" columns={columns} rows={data}/>
      )}
      {/* <DataTable slug="users" columns={columns} rows={userRows}/> */}
      {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Users
