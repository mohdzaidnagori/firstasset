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
import Description from '../../../../components/userForm/Description';
import Selects from '../../../../components/userForm/Selects';

const TestimonialCreate = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const [isSuccess, setIsSuccess] = useState(false)


    const options = {
        bg: [
            {
                value: '#cffafe', label: 'cyan'
            },
            {
                value: '#ffedd5', label: 'orange'
            },
            {
                value: '#ffe4e6', label: 'rose'
            },
            {
                value: '#fae8ff', label: 'fuchsia'
            },
            {
                value: '#f3e8ff', label: 'purple'
            },
            {
                value: '#dbeafe', label: 'blue'
            },
        ]
    }

    useEffect(() => {
        if (getLoggedUserQuery.isError) {
            router.push('/')
        }
    }, [getLoggedUserQuery.isError])
    if (getLoggedUserQuery.isError) {
        return null;
    }



    const initialValues = {
        bg: '',
        name: '',
        description: '',
        images: [],
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('name is required'),
        bg: Yup.string().required('Background is required'),
        description: Yup.string().required('description is required'),
        images: Yup.array().required('At least one image is required'),

    });
    const handleSubmit = async (values) => {
        setIsSuccess(true)
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('bg', values.bg);
            formData.append('description', values.description);


            values.images.forEach((image) => {
                formData.append('images[]', image);
            });

            const url = 'admin/testimonial_create';
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // Set the bearer token
                }
            };
            axios.post(url, formData, config)
                .then(response => {

                    setIsSuccess(false)
                    if (response.data.status === 'success') {
                        toast.success(response.data.message)
                        router.push('/admin/testimonial')
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
                    <div className='lg:shadow-lg md:w-[800px] lg:p-20 lg:rounded-xl p-10'>
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add user Testimonial</h3>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="">
                                        <Inputs name='name' label='Name' />
                                    </div>
                                    <div className="">
                                        <Selects options={options.bg} name='bg' label='Select background color' />
                                    </div>

                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <div className="">
                                        <Description name="description" label="Clinet Say" />
                                    </div>


                                    <div className="mt-2">
                                        <label className='block py-2 text-base font-medium text-gray-900'>Select Images</label>
                                        <input
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                            type="file"
                                            name="images"
                                            accept="image/*"
                                            onChange={(event) => {
                                                const files = Array.from(event.target.files);
                                                setFieldValue('images', files);
                                            }}
                                        />

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



export default TestimonialCreate