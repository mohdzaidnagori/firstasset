'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik, useFormikContext } from 'formik';
import axios from '../../../redux/services/axios';
import { Toaster, toast } from 'react-hot-toast';
import { MdClose } from 'react-icons/md';
import { useGetLoggedUserQuery } from '../../../redux/services/userAuthApi';
import { getToken, removeToken } from '../../../redux/services/LocalStorageServices';
import Selects from '../../../../components/userForm/Selects';
import Inputs from '../../../../components/userForm/Inputs';
import Description from '../../../../components/userForm/Description';
import { DatePickers } from '../../../../components/userForm/DatePicker';

const ResidentialrentPropertyUpdate = () => {
    const token = getToken('token')
    const router = useRouter()
    const getLoggedUserQuery = useGetLoggedUserQuery(token);
    const [isSuccess, setIsSuccess] = useState(false)
    const [selectedDate, setSelectedDate] = useState(null);
    const data = JSON.parse(getToken('r_rents'));



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
                value: 'Flat/Apartment', label: 'Flat/Apartment'
            },
            {
                value: 'Bungalow/Villa', label: 'Bungalow/Villa'
            },
        ],
        crore: Array.from({ length: 100 }, (_, i) => ({
            value: (i + 1),
            label: (i + 1)
        })),
        thousand: Array.from({ length: 100 }, (_, i) => ({
            value: (i + 1),
            label: (i + 1).toString()
        })),
        laks: Array.from({ length: 100 }, (_, i) => ({
            value: (i + 1),
            label: (i + 1)
        })),
        facing:[
            {value :'North',label:'North'},
            {value :'East',label:'East'},
            {value :'West',label:'West'},
            {value :'South',label:'South'},
            {value :'North-East',label:'North-East'},
            {value :'South-West',label:'South-West'},
            {value :'North-West',label:'North-West'},
            {value :'South-East',label:'South-East'},
        ],
        furnished: [
            { value: 'Fully Furnished', label: 'Fully Furnished' },
            { value: 'Semi Furnished', label: 'Semi Furnished' },
            { value: 'Unfurnished', label: 'Unfurnished' },
        ],
        parking: Array.from({ length: 16 }, (_, i) => ({
            value: (i),
            label: (i)
        })),
        washrooms: Array.from({ length: 16 }, (_, i) => ({
            value: (i),
            label: (i)
        })),
        pantry_cafeteria: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        currently_leased_out: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        status: [
            { value: 'Under Construction', label: 'Under Construction' },
            { value: 'Ready to move', label: 'Ready to move' }
        ],
        Bedrooms: Array.from({ length: 16 }, (_, i) => ({
            value: (i + 1),
            label: (i + 1)
        })),
        Bathrooms: Array.from({ length: 16 }, (_, i) => ({
            value: (i + 1),
            label: (i + 1)
        })),
        Balconies: Array.from({ length: 16 }, (_, i) => ({
            value: (i),
            label: (i)
        })),
        swimming_pool: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        gym: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        are_peds: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        are_non_veg: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        are_bachlore: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
    }
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
        pantry_cafeteria: Yup.string().required('Pantry/Cafeteria is required'),
        carpet_area: Yup.string().required('Carpet area is required'),
        super_area: Yup.string().required('Super area is required'),
        currently_leased_out: Yup.string().required('Currently leased out status is required'),
        description: Yup.string().required('Description is required'),
    });
    const handleSubmit = async (values) => {
        setIsSuccess(true)
        try {
            const formData = new FormData();
            formData.append('type', values.type);//
            formData.append('property_name', values.property_name);
            formData.append('locality', values.locality);
            formData.append('property_address', values.property_address);
            formData.append('parking', values.parking);
            formData.append('facing', values.facing);
            formData.append('Bedrooms', values.Bedrooms);
            formData.append('Balconies', values.Balconies);
            formData.append('swimming_pool', values.swimming_pool);
            formData.append('gym', values.gym);
            formData.append('are_peds', values.are_peds);
            formData.append('are_non_veg', values.are_non_veg);
            formData.append('are_bachlore', values.are_bachlore);
            formData.append('Bathrooms', values.Bathrooms);
            formData.append('furnished', values.furnished);
            formData.append('security_deposite', values.security_deposite);
            formData.append('carpet_area', values.carpet_area);
            formData.append('description', values.description);
            formData.append('available_from', selectedDate === null ? data.available_from : selectedDate);
            formData.append('id', data.id)
            formData.append('expected_price', values.expected_price);
            const isImagesArray = Array.isArray(values.images) && values.images.every((image) => image instanceof File);
            if (isImagesArray) {
                values?.images.forEach((image) => {
                    formData.append('images[]', image);
                });
            }

            const url = 'residential-rents-update';
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
            setIsSuccess(false)
        }
    }
    return (
        <>
            <Toaster />
            {
                getLoggedUserQuery.isSuccess &&
                <section className='w-full flex justify-center py-10 absolute top-20 bottom-0 z-20 bg-white'>
                    <div className='lg:shadow-2xl md:w-[800px] lg:p-20 lg:rounded-xl p-10 absolute'>
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Update Residential Rent Property</h3>
                        <Formik initialValues={data} onSubmit={handleSubmit} >
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='property_name' label='Property Name' />
                                        <Inputs name='locality' label='Locality (ex. Malad West)' />
                                        <Inputs name='property_address' label='Property Address' />
                                        <Selects options={options.type} defaults={data.type} name='type' label='Type' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                    <Selects options={options.Bedrooms} defaults={data.Bedrooms} name='Bedrooms' label='Bedrooms' />
                                        <Selects options={options.Balconies} defaults={data.Balconies} name='Balconies' label='Balconies' />
                                        <Selects options={options.Bathrooms} defaults={data.Bathrooms} name='Bathrooms' label='Bathrooms' />
                                        <Selects options={options.swimming_pool} defaults={data.swimming_pool} name='swimming_pool' label='Swimming Pool' />
                                        <Selects options={options.gym} defaults={data.gym} name='gym' label='Gym' />
                                        <Selects options={options.are_peds} defaults={data.are_peds} name='are_peds' label='Are Pets' />
                                        <Selects options={options.are_non_veg} defaults={data.are_non_veg} name='are_non_veg' label='Are Non Vegitarian' />
                                        <Selects options={options.are_bachlore} defaults={data.are_bachlore} name='are_bachlore' label='Are Bachelors' />
                                        <Inputs name='carpet_area' label='Carpet Area in sqft' />
                                        <Selects options={options.furnished} defaults={data.furnished} name='furnished' label='Furnished Status' />
                                        <Selects options={options.parking} defaults={data.parking} name='parking' label='Parking' />
                                        <Selects options={options.facing} defaults={data.facing} name='facing' label='Facing' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Price Details</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Inputs name='expected_price' label='Expected Rent Price' />
                                        <Inputs name='security_deposite' label='Security Deposit' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <div className="">
                                        <Description name="description" label="Description" />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase mb-2'>Available From</h4>
                                    <div className="relative">
                                        <DatePickers selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
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



export default ResidentialrentPropertyUpdate