'use client'
import React, { useEffect, useState } from 'react'
import { useGetLoggedUserQuery } from '../../app/redux/services/userAuthApi';
import { getToken } from '../../app/redux/services/LocalStorageServices';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import Inputs from './Inputs';
import axios from '../../app/redux/services/axios';
import { toast } from 'react-hot-toast';

const IntresetedForm = ({ data, click,intrested,type }) => {
    const token = getToken('token')
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const [isSuccess, setIsSuccess] = useState(false)

   console.log(data)


    const initialValues = {
        name: '',
        email: '',
        phone_no: '',
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Property name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone_no: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone is required'),
    });
    const handleSubmit = async (values) => {
        const MergeData = {
            'property_name': data.name || data.project_name || data.property_name,
            'property_location': data.location || data.address || data.property_address,
            'property_description': data.description,
            'name': values.name,
            'email': values.email,
            'phone': values.phone_no,
            'type': type
        }
        setIsSuccess(true)
        try {


            const url = 'fractional_intrested_create';
            axios.post(url, MergeData)
                .then(response => {

                    setIsSuccess(false)
                    if (response.data.status === 'success') {
                        toast.success(response.data.message)
                        click()
                    }
                    if (response.data.status === 'failed') {
                        Object.values(response.data.errors).forEach(error => {
                            toast.error(error[0]);
                        });

                    }
                })
                .catch(error => {
                    console.error(error);
                });

        } catch (error) {
            console.error(error);
        }


    }
    useEffect(() => {
       if(getLoggedUserQuery.isSuccess && intrested){
        handleSubmit(getLoggedUserQuery.data.data)
       }
    },[getLoggedUserQuery.isSuccess,intrested])
    return (
        <>
            {
                getLoggedUserQuery.isSuccess ?
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div className="loader p-5 rounded-full flex space-x-3">
                            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                        </div>
                        <h3 className='text-xl uppercase font-medium ml-4'>Loading...</h3>
                    </div>
                    :
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                        {({ values, setFieldValue }) => (
                            <Form encType="multipart/form-data" className=''>
                                <div className="max-w-xs mx-auto mt-40">
                                    <Inputs name='name' label='Enter Your Name' />
                                    <Inputs name='email' label='Enter Your Email' />
                                    <Inputs name='phone_no' label='Enter Your Mobile Number' />
                                </div>
                                <div className="mt-14 text-center">
                                    <button type="submit" disabled={isSuccess} className={`${isSuccess ? 'bg-teal-100' : 'bg-teal-500'} p-3 px-14 text-white font-semibold rounded-full`}>Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
            }
        </>
    )
}

export default IntresetedForm