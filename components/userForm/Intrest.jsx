import { Field } from 'formik'
import React from 'react'

const Intrest = ({options}) => {
    return (
        <>
            <label className='block pt-2 text-xl font-medium text-gray-900'>Interested in</label>
           <div className='grid lg:grid-cols-2 gap-6'>
           {options.map((option) => (
                <div key={option} className='flex bg-white items-center pl-4 border border-gray-200 rounded'>
                    <Field className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2' type="checkbox" name="interested_in" value={option} />
                  
                    <label for="bordered-checkbox-1" class="w-full py-2 ml-2 text-sm lg:text-base font-medium text-gray-900">{option}</label>
                </div>
            ))}
           </div>
        </>
    )
}

export default Intrest