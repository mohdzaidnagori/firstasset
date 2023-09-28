'use client'
import React, { useEffect, useState } from 'react'
import { useGetLoggedUserQuery } from '../../../redux/services/userAuthApi';
import { getToken } from '../../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, useFormikContext } from 'formik';
import Inputs from '../../../../components/userForm/Inputs';
import axios from '../../../redux/services/axios';
import { Toaster, toast } from 'react-hot-toast';


const LoaclityCreate = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const [isSuccess, setIsSuccess] = useState(false)


 

    useEffect(() => {
        if (getLoggedUserQuery.isError) {
            router.push('/')
        }
    }, [getLoggedUserQuery.isError])
    if (getLoggedUserQuery.isError) {
        return null;
    }



    const initialValues = {
        location: '',
    };
 
    const handleSubmit = async (values) => {
        setIsSuccess(true)
        try {
           

            const url = 'admin/createlocality';
           
            axios.post(url, values)
                .then(response => {

                    setIsSuccess(false)
                    if (response.data.status === 'success') {
                        toast.success(response.data.message)
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

    return (
        <>
            {
                getLoggedUserQuery.isSuccess &&
                <section className='w-full flex justify-center py-10'>
                    <div className='lg:shadow-lg md:w-[800px] lg:p-20 lg:rounded-xl p-10 h-[400px]'>
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Locality</h3>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="">
                                        <Inputs name='location' label='Locality' />
                                    </div>
                                    
                                    <div className="mt-14 text-center">
                                        <button type="submit" disabled={isSuccess} className={`${isSuccess ? 'bg-teal-100' : 'bg-teal-500'} p-3 px-14 text-white font-semibold rounded-full`}>Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </section>
            }
        </>
    )
}



export default LoaclityCreate