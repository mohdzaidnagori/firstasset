'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getToken } from '../../redux/services/LocalStorageServices'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const Verification = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [mobileSent, setMobileSent] = useState(false);
    const token = getToken()
    const handleEmailSubmit = () => {

    }
    const handleMobileSubmit = () => {
        const url = 'http://127.0.0.1:8000/api/user/verify-mobile';

        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            }
        };

        // Make the POST request
        axios.post(url, {}, config)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    toast.success(response.data.message)
                    setMobileSent(true)
                }
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleMobileVerify = (values) => {
        console.log(values)
        const url = 'http://127.0.0.1:8000/api/user/verify-otp-mobile';
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            }
        };
        axios.post(url, values,config)
            .then(response => {
                console.log(response.data)
                if(response.data.status === 'success'){
                    toast.success(response.data.message)
                }
                if(response.data.status === 'failed'){
                    toast.error(response.data.message)
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    useEffect(() => {
        const verifyEmailStatus = () => {
            const url = 'http://127.0.0.1:8000/api/user/mobile_status';
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // Set the bearer token
                }
            };
            axios.post(url, {}, config)
                .then(response => {
                    console.log(response.data);
                    if (response.data.success === true) {
                        setMobileSent(false)
                    }
                    if (response.data.success === false) {
                        setMobileSent(true)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        };
        verifyEmailStatus();
    }, []);

    const initialValues = {
        otp: '',
    };
    return (
        <section className="bg-white dark:bg-gray-900 -mt-20" >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <Image className="mr-2" src="/assets/logo.jpg" alt="logo first asset" width={200} height={200} />
                </Link>
                <div className="w-full bg-white rounded-xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Verification
                        </h1>
                        <Formik initialValues={initialValues} onSubmit={handleEmailSubmit}>
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email Otp</label>
                                    <Field type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email otp" required="" />
                                    <ErrorMessage className="mt-3 text-red-700" name="email" component="div" />
                                    <div className='mt-4 flex justify-between'>
                                        <button className='p-2 px-10 bg-teal-500 rounded-full text-white'>Send</button>
                                        <button className='p-2 px-10 bg-teal-500 rounded-full text-white'>ReSend</button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        <Formik initialValues={initialValues} onSubmit={handleMobileVerify}>
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Password Otp</label>
                                    <Field type="text" name="otp" id="otp" placeholder="mobile otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <ErrorMessage className="mt-3 text-red-700" name="otp" component="div" />
                                    <div className='mt-4 flex justify-between'>
                                        {
                                            !mobileSent ? <button type="button" onClick={handleMobileSubmit} className='p-2 px-10 bg-teal-500 rounded-full text-white'>Send</button>
                                            :  <button className='p-2 px-10 bg-teal-500 rounded-full text-white'>Verify</button>
                                        }
                                       
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Verification