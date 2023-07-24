'use client'
import React from 'react'
import { MaterialReactTable } from 'material-react-table';
import { useMemo } from 'react';




const ReactTable = ({ data,columns,name }) => {
    console.log(data)
    

    return <div className='absolute inset-0 w-full scroll-smooth'>
        <div className='absolute top-0 left-0 right-0 h-20 bg-white shadow-sm flex items-center justify-between'>
        <h3 className='pl-10 text-base md:text-2xl uppercase font-semibold'>{name}</h3>
          <h3 className='pr-10 text-base md:text-2xl uppercase font-semibold text-teal-500'>First Asset</h3>
        </div>
        <div className='absolute w-[90%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <MaterialReactTable columns={columns} enableFullScreenToggle={false} data={data} />
        </div>
    </div>
}

export default ReactTable