'use client'
import React, { useEffect, useState } from 'react'
import { useAddCommericialSellPropertyMutation, useGetLoggedUserQuery, useGetUserPropertyQuery } from '../../app/redux/services/userAuthApi';
import { getToken } from '../../app/redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, useFormikContext } from 'formik';
import Inputs from './Inputs';
import Checkboxs from './Checkboxs';
import Selects from './Selects';
import LocationDropdown from '../statecity/LocationDropdown';
import Description from './Description';
import axios from '../../app/redux/services/axios';
import { Toaster, toast } from 'react-hot-toast';
import { MdClose } from 'react-icons/md';

const CommercialRentPropertyForm = ({ data, click }) => {
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
                value: 'Office Space', label: 'Office Space'
            },
            {
                value: 'Retail', label: 'Retail'
            }
        ],
        maintenance_charge: [
            {
                value: 'Monthly', label: 'Monthly'
            },
            {
                value: 'Quarterly', label: 'Quarterly'
            },
            {
                value: 'Yearly', label: 'Yearly'
            },
            {
                value: 'One time', label: 'One time'
            }
        ],
        crore: [
            {
                value: '1', label: '1 Cr'
            },
            {
                value: '2', label: '2 Cr'
            },
            {
                value: '3', label: '3 Cr'
            },
            {
                value: '4', label: '4 Cr'
            }
        ],
        thousand: [
            {
                value: '10', label: '10 Th'
            },
            {
                value: '20', label: '20 Th'
            },
            {
                value: '30', label: '30 Th'
            },
            {
                value: '40', label: '40 Th'
            }
        ],
        laks: [
            {
                value: '10', label: '10 Lacs'
            },
            {
                value: '20', label: '20 Lacs'
            },
            {
                value: '30', label: '30 Lacs'
            },
            {
                value: '40', label: '40 Lacs'
            }
        ],
        days: Array.from({ length: 31 }, (_, i) => ({
            value: (i + 1).toString().padStart(2, '0'),
            label: (i + 1).toString().padStart(2, '0'),
        })),
        month: [
            {
                value: '01', label: '01'
            },
            {
                value: '02', label: '02'
            },
            {
                value: '03', label: '03'
            },
            {
                value: '04', label: '04'
            },
            {
                value: '05', label: '05'
            },
            {
                value: '06', label: '06'
            },
            {
                value: '07', label: '07'
            },
            {
                value: '08', label: '08'
            },
            {
                value: '09', label: '09'
            },
            {
                value: '10', label: '10'
            },
            {
                value: '11', label: '11'
            },
            {
                value: '12', label: '12'
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
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
        ],
        washrooms: [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
        ],
        pantry_cafeteria: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        currently_rented_out: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        possession_status: [
            { value: '', label: '' },
            { value: 'Date', label: 'Date' },
            { value: 'Immediately', label: 'Age of Construction' }
        ]
    }

    const initialValues = {
        locality: '',
        type: '',
        property_name: '',
        property_address: '',
        expected_monthly_rent: '',
        security_amount: '',
        maintenance_charge: '',
        month: '',
        year: '',
        day: '',
        age_of_construction: '',
        furnished_status: '',
        floor_number: '2',
        total_floor: '',
        washrooms: '',
        pantry_cafeteria: '',
        carpet_area: '',
        super_area: '',
        currently_rented_out: '',
        description: '',
        images: [],
        state: null,
        city: null,
        locality: null,
    };
    const validationSchema = Yup.object().shape({
        // locality: Yup.string().required('Locality is required'),
        type: Yup.string().required('Type is required'),
        property_name: Yup.string().required('Property name is required'),
        property_address: Yup.string().required('Property address is required'),
        expected_monthly_rent: Yup.number().required('expected monthly rent is required'),
        security_amount: Yup.number().required('security amount is required'),
        maintenance_charge: Yup.string().required('Maintenance charge is required'),
        furnished_status: Yup.string().required('Furnished status is required'),
        floor_number: Yup.string().required('Floor number is required'),
        total_floor: Yup.number().required('Total floor is required'),
        washrooms: Yup.number().required('Washrooms is required'),
        pantry_cafeteria: Yup.string().required('Pantry/Cafeteria is required'),
        carpet_area_sqft: Yup.string().required('Carpet area is required'),
        super_area_sqft: Yup.string().required('Super area is required'),
        currently_rented_out: Yup.number().required('Currently rent out status is required'),
        description: Yup.string().required('Description is required'),

    });
    const handleSubmit = async (values) => {
        setIsSuccess(true)
        try {
            const formData = new FormData();
            formData.append('type', values.type);
            formData.append('property_name', values.property_name);
            formData.append('property_address', values.property_address);
            formData.append('expected_monthly_rent', values.expected_monthly_rent);
            formData.append('security_amount', values.security_amount);
            formData.append('maintenance_charge', values.maintenance_charge);
            formData.append('furnished_status', values.furnished_status);
            formData.append('floor_number', values.floor_number);
            formData.append('total_floor', values.total_floor);
            formData.append('washrooms', values.washrooms);
            formData.append('pantry_cafeteria', values.pantry_cafeteria);
            formData.append('carpet_area_sqft', values.carpet_area_sqft);
            formData.append('super_area_sqft', values.super_area_sqft);
            formData.append('currently_rented_out', values.currently_rented_out);
            formData.append('description', values.description);
            const dates = `${values.year || year}-${values.month || month}-${values.day || date}`
            formData.append('availability_date', values.possession_status === 'Ready to move' ? '' : dates);
            formData.append('booking_amount', values.booking_amount);
            formData.append('id', data.id);
            const isImagesArray = Array.isArray(values.images) && values.images.every((image) => image instanceof File);
            if (isImagesArray) {
                values?.images.forEach((image) => {
                    formData.append('images[]', image);
                });
            }


            const url = 'commerical-rents-update';
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
            click()

        } catch (error) {
            console.error(error);
        }
    }
    const year = data?.availability_date?.slice(0, 4);
    const date = data?.availability_date?.slice(8).toString()
    const month = data?.availability_date?.slice(5, 7).toString()
    return (
        <>
            <Toaster />
            {
                getLoggedUserQuery.isSuccess &&
                <section className='w-full flex justify-center py-10 absolute top-20 bottom-0 z-20 bg-white'>
                    <div className='lg:shadow-2xl md:w-[800px] lg:p-20 lg:rounded-xl p-10 absolute'>
                        <div onClick={click} className='absolute top-0 right-0 bg-teal-500 p-2 cursor-pointer hover:p-4 transition-all duration-200'><MdClose className='text-white text-2xl' /></div>
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Commercial Rent Property</h3>
                        <Formik initialValues={data} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='property_name' label='Property Name' />
                                        <Inputs name='property_address' label='Property Address' />
                                        <Selects options={options.type} defaults={data.type} name='type' label='type' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Price Details</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Inputs name='expected_monthly_rent' label='expected monthly rent' />
                                        <Inputs name='security_amount' label='security amount' />
                                        <Selects options={options.maintenance_charge} defaults={data.maintenance_charge} name='maintenance_charge' label='maintenance charge' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Property Features</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Selects options={options.furnished_status} defaults={data.furnished_status} name='furnished_status' label='Furnished Status' />
                                        <Selects options={options.floor_number} defaults={data.floor_number} name='floor_number' label='Floor Number' />
                                        <Selects options={options.total_floor} defaults={data.total_floor} name='total_floor' label='Total Floor' />
                                        <Selects options={options.washrooms} defaults={data.washrooms} name='washrooms' label='Washrooms' />
                                        <Selects options={options.pantry_cafeteria} defaults={data.pantry_cafeteria} name='pantry_cafeteria' label='Pantry Cafeteria' />
                                        <Selects options={options.currently_rented_out} defaults={data.currently_rented_out} name='currently_rented_out' label='Currently rented out' />
                                    </div>

                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Area</h4>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='carpet_area_sqft' label='Carpet Area Sqt' />
                                        <Inputs name='super_area_sqft' label='Super Area Sqt' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <div className="">
                                        <Description name="description" label="Description" />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase pt-6'>Availabel Form</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2'>
                                        <Selects options={options.days} defaults={date} name='day' label='Day' />
                                        <Selects options={options.month} defaults={month} name='month' label='Month' />
                                        <Selects options={options.year} defaults={year} name='year' label='Year' />
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

export default CommercialRentPropertyForm