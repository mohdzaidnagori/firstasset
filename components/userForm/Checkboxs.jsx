import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Checkboxs = ({options,name,label}) => {
    return (
        <>
         <label className='block py-2 text-xl lg:text-xl font-medium text-gray-900'>{label}</label>
           <div className='grid lg:grid-cols-2 gap-6'>
           {options.map((option) => (
                <div key={option} className='flex bg-white items-center pl-4 border border-gray-200 rounded'>
                    <Field id={option} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2' type="checkbox" name={name} value={option} />
                  
                    <label htmlFor={option} className="w-full py-2 ml-2 text-sm lg:text-base font-medium text-gray-900">{option}</label>
                </div>
            ))}
           </div>
           <ErrorMessage name={name} className='mt-1 text-red-700' component="div" />
        </>
    )
}

export default Checkboxs;