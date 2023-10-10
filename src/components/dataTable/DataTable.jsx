import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import "../dataTable/DataTable.css"
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const DataTable = (props) => {

  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn:(id)=>{
      return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
        method:"delete",
      });
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries([`all${props.slug}`])
    }
  });

  const handleDelete = (id) =>{
    // console.log(id+"has been deleted!")
    mutation.mutate(id)
  }

  const actionColumn = {
    field:"action",
    headerName:"Action",
    width:150,
    renderCell: (params) => {
      return (
        <div className="action flex gap-[15px]">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          </Link>
          <div className="delete" onClick={()=>handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" className='w-[20px] h-[20px] cursor-pointer'/>
          </div>
        </div>
      )
    },
  }

  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid bg-[white] p-[20px]'
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs: 500},
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable