
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

const Update = ({ params }) => {
    const { slug } = params;

    // Decode the slug and parse the JSON string back to an object
    const decodedSlug = decodeURIComponent(slug[0]);
    const objectFromSlug = JSON.parse(decodedSlug);
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const [isSuccess, setIsSuccess] = useState(false)
    // const [AddCommericialSell ,{isLoading, isSuccess, isError}] = useAddCommericialSellPropertyMutation()

    useEffect(() => {
        if (getLoggedUserQuery.isError) {
            router.push('/')
        }
    }, [getLoggedUserQuery.isError])
    if (getLoggedUserQuery.isError) {
        return null;
    }

    const validationSchema = Yup.object().shape({
        // locality: Yup.string().required('Locality is required'),
        location: Yup.string().required('Type is required'),
        name: Yup.string().required('Property name is required'),
        target_irr: Yup.string().required('Property name is required'),
        price: Yup.string().required('Property name is required'),
        description: Yup.string().required('Property name is required'),
        entry_yield: Yup.string().required('Property name is required'),
        carpet_area: Yup.string().required('Property name is required'),

    });
    const handleSubmit = async (values) => {
        setIsSuccess(true)
        console.log(values)
        try {
            const formData = new FormData();
            formData.append('location', values.location);
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('entry_yield', values.entry_yield);
            formData.append('carpet_area', values.carpet_area);
            formData.append('target_irr', values.target_irr);
            formData.append('description', values.description);
            formData.append('id', values.id);
            const isImagesArray = Array.isArray(values.images) && values.images.every((image) => image instanceof File);
            if (isImagesArray) {
                values?.images.forEach((image) => {
                    formData.append('images[]', image);
                });
            }

            const url = `admin/fractional_update/${values.id}`;
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
                        router.push('/admin/fractional')
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
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Commercial Sell Property</h3>
                        <Formik initialValues={objectFromSlug} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='name' label='Property Name' />
                                        <Inputs name='price' label='Price' />
                                        <Inputs name='carpet_area' label='Carpet Area' />
                                        <Inputs name='entry_yield' label='Entry Yield' />
                                        <Inputs name='target_irr' label='Target IRR' />
                                        <Inputs name='location' label='Location' />
                                    </div>

                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <div className="">
                                        <Description name="description" label="Description" />
                                    </div>


                                    <div className="mt-2">
                                        <label className='block py-2 text-base font-medium text-gray-900'>Select Images</label>
                                        <input
                                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                            type="file"
                                            multiple
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

export default Update