import { ErrorMessage, Field } from 'formik'
import React from 'react'

const Numbers = ({name ,label}) => {
  return (
    <div>
      <label className='block py-2 text-base font-medium text-gray-900'>{label}</label>
      <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  min="0" type="number" name={name} />
      <ErrorMessage name={name} className='mt-1 text-red-700' component="div" />
    </div>
  )
}

export default Numbers