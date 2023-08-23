'use client'
import React, { useEffect, useState } from 'react'
import { useAddCommericialSellPropertyMutation, useGetLoggedUserQuery } from '../../redux/services/userAuthApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, useFormikContext } from 'formik';
import Inputs from '../../../components/userForm/Inputs';
import Checkboxs from '../../../components/userForm/Checkboxs';
import Selects from '../../../components/userForm/Selects';
import LocationDropdown from '../../../components/statecity/LocationDropdown';
import Description from '../../../components/userForm/Description';
import axios from '../../redux/services/axios';
import { Toaster, toast } from 'react-hot-toast';

const Residential_sale = () => {
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

    const options = {
        type: [
            {
                value: 'Flat / Apartment', label: 'Flat / Apartment'
            },
            {
                value: 'Bungalow / Villa', label: 'Bungalow / Villa'
            }
        ],
        crore: [
            {
                value: 1, label: 1
            },
            {
                value: 2, label: 2
            },
            {
                value: 3, label: 3
            },
            {
                value: 4, label: 4
            }
        ],
        thousand: [
            {
                value: 1, label: 1
            },
            {
                value: 2, label: 2
            },
            {
                value: 3, label: 3
            },
            {
                value: 4, label: 4
            }
        ],
        laks: [
            {
                value: 1, label: 1
            },
            {
                value: 2, label: 2
            },
            {
                value: 3, label: 3
            },
            {
                value: 4, label: 4
            }
        ],
        days: Array.from({ length: 31 }, (_, i) => ({
            value: (i + 1).toString(),
            label: (i + 1).toString()
        })),
        month: [
            {
                value: '01', label: 'Jan'
            },
            {
                value: '02', label: 'Feb'
            },
            {
                value: '03', label: 'Mar'
            },
            {
                value: '04', label: 'Apr'
            },
            {
                value: '05', label: 'May'
            },
            {
                value: '06', label: 'Jun'
            },
            {
                value: '07', label: 'Jul'
            },
            {
                value: '08', label: 'Aug'
            },
            {
                value: '09', label: 'Sep'
            },
            {
                value: '10', label: 'Oct'
            },
            {
                value: '11', label: 'Nov'
            },
            {
                value: '12', label: 'Dec'
            },

        ],
        year: [
            {
                value: '2021', label: '2021'
            },
            {
                value: '2022', label: '2022'
            },
            {
                value: '2023', label: '2023'
            },
            {
                value: '2024', label: '2024'
            },
            {
                value: '2025', label: '2025'
            },
            {
                value: '2026', label: '2026'
            },
            {
                value: '2027', label: '2027'
            },
            {
                value: '2028', label: '2028'
            },
            {
                value: '2029', label: '2029'
            },
            {
                value: '2030', label: '2030'
            },
            {
                value: '2031', label: '2031'
            },
            {
                value: '2032', label: 'May'
            },

        ],
        age_of_construction: [
            { value: 'New construction', label: 'New construction' },
            { value: 'less than 5 years', label: 'Less than 5 years' },
            { value: '5-10 years', label: '5-10 years' },
            { value: '10-15 years', label: '10-15 years' },
            { value: '15-20 years', label: '15-20 years' },
            { value: 'above 20 years', label: 'Above 20 years' },
        ],
        furnished_status: [
            { value: 'Furnished', label: 'Furnished' },
            { value: 'Unfurnished', label: 'Unfurnished' },
        ],
        floor_number: [
            { value: 'lower basement', label: 'Lower Basement' },
            { value: 'upper basement', label: 'Upper Basement' },
            { value: 'ground', label: 'Ground' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
        ],
        total_floor: [
            { value: '0', label: '0' },
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
        ],
        Bedroom: [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
        ],
        Balconies: [
            { value: 0, label: '0' },
            { value: 1, label: '1' },
            { value: 2, label: '2' },
        ],
        Bathrooms: [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
        ],
        washrooms: [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
        ],
        pantry_cafeteria: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        currently_leased_out: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        possession_status: [
            { value: '', label: '' },
            { value: 'under construction', label: 'under construction' },
            { value: 'Ready to move', label: 'Ready to move' }
        ]
    }

    const initialValues = {
        type: '',
        property_name: '',
        property_address: '',
        expected_sale_price: '',
        crore: '',
        laks: '',
        thousand: '',
        booking_amount: '',
        possession_status: '',
        available_from: '',
        month: '',
        year: '',
        day: '',
        age_of_construction: '',
        furnished_status: '',
        floor_number: '',
        total_floor: '',
        washrooms: '',
        Bedroom: '',
        Balconies: '',
        Bathrooms: '',
        pantry_cafeteria: '',
        carpet_area: '',
        super_area: '',
        currently_leased_out: '',
        description: '',
        images: [],
    };
    const validationSchema = Yup.object().shape({
        // locality: Yup.string().required('Locality is required'),
        type: Yup.string().required('Type is required'),
        property_name: Yup.string().required('Property name is required'),
        property_address: Yup.string().required('Property address is required'),
        possession_status: Yup.string().required('Possession status is required'),
        furnished_status: Yup.string().required('Furnished status is required'),
        floor_number: Yup.string().required('Floor number is required'),
        total_floor: Yup.string().required('Total floor is required'),
        washrooms: Yup.string().required('Washrooms is required'),
        Bedroom: Yup.string().required('Bedroom is required'),
        Balconies: Yup.string().required('Balconies is required'),
        Bathrooms: Yup.string().required('Bathrooms is required'),
        pantry_cafeteria: Yup.string().required('Pantry/Cafeteria is required'),
        carpet_area: Yup.string().required('Carpet area is required'),
        super_area: Yup.string().required('Super area is required'),
        currently_leased_out: Yup.string().required('Currently leased out status is required'),
        description: Yup.string().required('Description is required'),
        images: Yup.array().required('At least one image is required'),
    })
   const handleSubmit = async (values) => {
        setIsSuccess(true)
       
        try {
            const formData = new FormData();
            formData.append('type', values.type);
            formData.append('property_name', values.property_name);
            formData.append('property_address', values.property_address);
            formData.append('possession_status', values.possession_status);
            formData.append('furnished_status', values.furnished_status);
            formData.append('floor_number', values.floor_number);
            formData.append('total_floor', values.total_floor);
            formData.append('washrooms', values.washrooms);
            formData.append('Bedroom', values.Bedroom);
            formData.append('Balconies', values.Balconies);
            formData.append('Bathrooms', values.Bathrooms);
            formData.append('pantry_cafeteria', values.pantry_cafeteria);
            formData.append('carpet_area', values.carpet_area);
            formData.append('super_area', values.super_area);
            formData.append('currently_leased_out', values.currently_leased_out);
            formData.append('description', values.description);
            formData.append('available_from', values.possession_status === 'Ready to move' ? '' : `${values.year}-${values.month}-${values.day}`);
            formData.append('age_of_construction', values.age_of_construction);
            formData.append('booking_amount', values.booking_amount);
            const price = (values.crore * 10000000) + (values.laks * 100000) + (values.thousand * 10000)
            formData.append('expected_sale_price', price);

            values.images.forEach((image) => {
                formData.append('images[]', image);
            });

            const url = 'add-residential-sale';
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
                        router.push('/project/property_list');
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
            <Toaster />
            {
                getLoggedUserQuery.isSuccess &&
                <section className='w-full flex justify-center py-10'>
                    <div className='lg:shadow-2xl md:w-[800px] lg:p-20 lg:rounded-xl p-10'>
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Residential Sell Property</h3>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} >
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='property_name' label='Property Name' />
                                        <Inputs name='property_address' label='Property Address' />
                                        <Selects options={options.type} name='type' label='type' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Property Features</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Selects options={options.furnished_status} name='furnished_status' label='Furnished Status' />
                                        <Selects options={options.floor_number} name='floor_number' label='Floor Number' />
                                        <Selects options={options.total_floor} name='total_floor' label='Parking' />
                                        <Selects options={options.washrooms} name='washrooms' label='Washrooms' />
                                        <Selects options={options.Bedroom} name='Bedroom' label='Bedroom' />
                                        <Selects options={options.Balconies} name='Balconies' label='Balconies' />
                                        <Selects options={options.Bathrooms} name='Bathrooms' label='Bathrooms' />
                                        <Selects options={options.pantry_cafeteria} name='pantry_cafeteria' label='Pantry Cafeteria' />
                                        <Selects options={options.currently_leased_out} name='currently_leased_out' label='Currently leased out' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Price Details</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Selects options={options.crore} name='crore' label='Amount In Crore' />
                                        <Selects options={options.laks} name='laks' label='Amount in lacs' />
                                        <Selects options={options.thousand} name='thousand' label='Amount in Thousand' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Area</h4>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='carpet_area' label='Carpet Area Sqt' />
                                        <Inputs name='super_area' label='Super Area Sqt' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <div className="">
                                        <Description name="description" label="Description" />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Possession Status:</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Selects options={options.possession_status} name='possession_status' label='Choose Any One' />
                                    </div>

                                    {values.possession_status === 'under construction' && (
                                        <>
                                            <h4 className='text-black font-semibold uppercase pt-6'>Availabel Form</h4>
                                            <div className='grid gap-6 gap-y-2 md:grid-cols-2'>
                                                <Selects options={options.days} name='day' label='Day' />
                                                <Selects options={options.month} name='month' label='Month' />
                                                <Selects options={options.year} name='year' label='Year' />
                                            </div>
                                        </>
                                    )}

                                    {values.possession_status === 'Ready to move' && (
                                        <div className='mt-6'>
                                            <Selects options={options.age_of_construction} name='age_of_construction' label='Age Of Construction' />
                                        </div>
                                    )}

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
                                        <button type="submit" disabled={isSuccess}  className={`${isSuccess ? 'bg-teal-100' : 'bg-teal-500'} p-3 px-14 text-white font-semibold rounded-full`}>Submit</button>
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


export default Residential_sale