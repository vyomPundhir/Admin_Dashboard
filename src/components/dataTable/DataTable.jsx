import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'
import "../dataTable/DataTable.css"

const DataTable = (props) => {

  return (
    <div className='dataTable'>
      <DataGrid
        className='dataGrid bg-[white] p-[20px]'
        rows={props.rows}
        columns={props.columns}
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