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

const Create = () => {
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



    const initialValues = {
        amenities: '',
        configration: '',
        floorplans: '',
        location_map: '',
        address:'',
        rera_date: '',
        project_name: '',
        price_range: '',
        description: '',
        specifications: '',
        images: [],
    };
    const validationSchema = Yup.object().shape({
        // locality: Yup.string().required('Locality is required'),
        carpet_area: Yup.string().required('carpet area is required'),
        configration: Yup.string().required('configration is required'),
        floor: Yup.string().required('floor is required'),
        location_map: Yup.string().required('location map is required'),
        rera_date: Yup.string().required('rera date is required'),
        project_name: Yup.string().required('project name is required'),
        address: Yup.string().required('address is required'),
        price_range: Yup.string().required('price range is required'),
        description: Yup.string().required('description is required'),
        units: Yup.string().required('units is required'),
        images: Yup.array().required('At least one image is required'),

    });
    const handleSubmit = async (values) => {
        setIsSuccess(true)
        try {
            const formData = new FormData();
            formData.append('carpet_area', values.carpet_area);
            formData.append('configration', values.configration);
            formData.append('floor', values.floor);
            formData.append('location_map', values.location_map);
            formData.append('project_name', values.project_name);
            formData.append('rera_date', values.rera_date);
            formData.append('rera_number', values.rera_number);
            formData.append('address', values.address);
            formData.append('price_range', values.price_range);
            formData.append('units', values.units);
            formData.append('description', values.description);


            values.images.forEach((image) => {
                formData.append('images[]', image);
            });

            const url = 'admin/sole_create';
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
                        router.push('/admin/sole')
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
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Sole Property</h3>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='project_name' label='Project Name' />
                                        <Inputs name='carpet_area' label='carpet Area' />
                                        <Inputs name='configration' label='Configration' />
                                        <Inputs name='rera_date' label='Rera Date' />
                                        <Inputs name='address' label='Address' />
                                        <Inputs name='rera_number' label='Rera Number' />
                                        <Inputs name='location_map' label='Location Map' />
                                        <Inputs name='price_range' label='Price Range' />
                                        <Inputs name='units' label='No of Units' />
                                        <Inputs name='floor' label='Number of Floor' />
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

export default Create