import { ErrorMessage, Field } from 'formik'
import React from 'react'

const UserFrom = () => {
    return (
            <>
            <div>
                <label className='block pt-2 text-sm font-medium text-gray-900'>Name/Organization Name:</label>
                <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="name" />
            </div>

            <div>
                <label className='block pt-2 text-sm font-medium text-gray-900'>Contact Person (option of same as above):</label>
                <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="text" name="contact_person" />
            </div>

            <div>
                <label className='block pt-2 text-sm font-medium text-gray-900'>Email:</label>
                <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="email" name="email" />
                <ErrorMessage name="email" component="div" />
            </div>

            <div>
                <labe className='block pt-2 text-sm font-medium text-gray-900'>Phone No. (Email and Phone No. verification with OTP):</labe>
                <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="tel" name="phone" />
                <ErrorMessage name="phone" component="div" />
            </div>
            <div>
                <labe className='block pt-2 text-sm font-medium text-gray-900'>Password</labe>
                <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="password" name="password" />
                <ErrorMessage name="password" component="div" />
            </div>
            <div>
                <labe className='block pt-2 text-sm font-medium text-gray-900'>Confirm Password</labe>
                <Field className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' type="password" name="password_confirmation" />
                <ErrorMessage name="password_confirmation" component="div" />
            </div>
            </>

    )
}

export default UserFrom