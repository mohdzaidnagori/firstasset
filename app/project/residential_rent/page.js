'use client'
import React, { useEffect, useState } from 'react'
import { useAddCommericialSellPropertyMutation, useGetLoggedUserQuery } from '../../redux/services/userAuthApi';
import { getToken } from '../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik} from 'formik';
import Inputs from '../../../components/userForm/Inputs';
import Checkboxs from '../../../components/userForm/Checkboxs';
import Selects from '../../../components/userForm/Selects';
import LocationDropdown from '../../../components/statecity/LocationDropdown';
import Description from '../../../components/userForm/Description';
import axios from '../../redux/services/axios';
import { Toaster, toast } from 'react-hot-toast';

const Residential_rent = () => {
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
        sale_type: [
            {
                value: 'Sale', label: 'Sale'
            },
            {
                value: 'Lease/Rent', label: 'Lease/Rent'
            }
        ],
        type: [
            {
                value: 'Office Space', label: 'Office Space'
            },
            {
                value: 'Retail', label: 'Retail'
            },
            {
                value: 'Flat / Apartment', label: 'Flat / Apartment'
            },
            {
                value: 'Bungalow / Villa', label: 'Bungalow / Villa'
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
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
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
        currently_rented_out: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        who_are_bachlelor: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        who_eat_non_veg: [
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
        ],
        with_pets: [
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
        sale_type: '',
        locality: '',
        type: '',
        property_name: '',
        property_address: '',
        expected_monthly_rent: '',
        security_amount: '',
        maintenance_charge: '',
        possession_status: '',
        available_from: '',
        month: '',
        year: '',
        day: '',
        with_pets:'',
        who_eat_non_veg:'',
        who_are_bachlelor:'',
        age_of_construction: '',
        furnished_status: '',
        floor_number: '',
        total_floor: '',
        washrooms: '',
        pantry_cafeteria: '',
        carpet_area: '',
        super_area: '',
        currently_rented_out: '',
        monthly_rent_amount: '',
        description: '',
        images: [],
        state: null,
        city: null,
        locality: null,
    };
    const validationSchema = Yup.object().shape({
        sale_type: Yup.string().required('Sale type is required'),
        // locality: Yup.string().required('Locality is required'),
        type: Yup.string().required('Type is required'),
        property_name: Yup.string().required('Property name is required'),
        property_address: Yup.string().required('Property address is required'),
        expected_monthly_rent: Yup.number().required('expected monthly rent is required'),
        monthly_rent_amount: Yup.number().required('monthly rent is required'),
        security_amount: Yup.number().required('security amount is required'),
        maintenance_charge: Yup.string().required('Maintenance charge is required'),
        possession_status: Yup.string().required('Possession status is required'),
        furnished_status: Yup.string().required('Furnished status is required'),
        floor_number: Yup.string().required('Floor number is required'),
        total_floor: Yup.string().required('Total floor is required'),
        washrooms: Yup.string().required('Washrooms is required'),
        with_pets:Yup.number().required('With Pets is required'),
        who_eat_non_veg:Yup.number().required('Who eat non veg  is required'),
        who_are_bachlelor:Yup.number().required('Who are Bachleor is required'),
        pantry_cafeteria: Yup.string().required('Pantry/Cafeteria is required'),
        carpet_area: Yup.string().required('Carpet area is required'),
        super_area: Yup.string().required('Super area is required'),
        currently_rented_out: Yup.string().required('Currently rent out status is required'),
        description: Yup.string().required('Description is required'),
        images: Yup.array().required('At least one image is required'),
        state: Yup.object()
            .shape({
                value: Yup.string().required('City value is required'),
                label: Yup.string().required('City label is required'),
            })
            .required('State in is required'),
        city: Yup.object()
            .shape({
                value: Yup.string().required('State value is required'),
                label: Yup.string().required('State label is required'),
            })
            .required('City is required'),
        locality: Yup.object()
            .shape({
                value: Yup.string().required('Locality value is required'),
                label: Yup.string().required('Locality label is required'),
            })
            .required('Locality in is required'),
    });
    const logValidationErrors = (error) => {
        if (error instanceof Yup.ValidationError) {
          error.inner.forEach((error) => {
            console.log(error.path, error.message);
          });
        }
      };
    const handleSubmit = async (values) => {
        try {
            validationSchema.validateSync(values, { abortEarly: false });
          } catch (error) {
            logValidationErrors(error);
          } 
        setIsSuccess(true)
        try {
            const formData = new FormData();
            formData.append('sale_lease', values.sale_type);
            formData.append('type', values.type);
            formData.append('property_name', values.property_name);
            formData.append('property_address', values.property_address);
            formData.append('expected_monthly_rent', values.expected_monthly_rent);
            formData.append('security_amount', values.security_amount);
            formData.append('maintenance_charge', values.maintenance_charge);
            formData.append('availability', values.possession_status);
            formData.append('furnished_status', values.furnished_status);
            formData.append('floor_number', values.floor_number);
            formData.append('total_floor', values.total_floor);
            formData.append('washrooms', values.washrooms);
            formData.append('with_pets', values.with_pets);
            formData.append('who_eat_non_veg', values.who_eat_non_veg);
            formData.append('who_are_bachlelor', values.who_are_bachlelor);
            formData.append('pantry_cafeteria', values.pantry_cafeteria);
            formData.append('carpet_area_sqft', values.carpet_area);
            formData.append('super_area_sqft', values.super_area);
            formData.append('currently_rented_out', values.currently_rented_out);
            formData.append('monthly_rent_amount', values.monthly_rent_amount);
            formData.append('description', values.description);
            formData.append('locality', `${values.state.value} ${values.city.value} ${values.locality.value}`);
            formData.append('available_date', values.possession_status === 'Ready to move' ? '' : `${values.year}-${values.month}-${values.day}`);
            formData.append('age_of_construction', values.age_of_construction);
           

            values.images.forEach((image) => {
                formData.append('images[]', image);
            });

            const url = 'add-residential-rent';
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
                        <h3 className='text-center pb-5 text-2xl uppercase font-semibold'>Add Residential Rent Property</h3>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            {({ values, setFieldValue }) => (
                                <Form encType="multipart/form-data">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <Inputs name='property_name' label='Property Name' />
                                        <Inputs name='property_address' label='Property Address' />
                                        <Selects options={options.type} name='type' label='type' />
                                        <Selects options={options.sale_type} name='sale_type' label='Sale Lease' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Price Details</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Inputs name='expected_monthly_rent' label='expected monthly rent' />
                                        <Inputs name='security_amount' label='security amount' />
                                        <Selects options={options.maintenance_charge} name='maintenance_charge' label='maintenance charge' />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Property Features</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Selects options={options.furnished_status} name='furnished_status' label='Furnished Status' />
                                        <Selects options={options.floor_number} name='floor_number' label='Floor Number' />
                                        <Selects options={options.total_floor} name='total_floor' label='Total Floor' />
                                        <Selects options={options.washrooms} name='washrooms' label='Washrooms' />
                                        <Selects options={options.with_pets} name='with_pets' label='With Pets' />
                                        <Selects options={options.who_eat_non_veg} name='who_eat_non_veg' label='Who eat non veg' />
                                        <Selects options={options.who_are_bachlelor} name='who_are_bachlelor' label='Who are bachlelor' />
                                        <Selects options={options.pantry_cafeteria} name='pantry_cafeteria' label='Pantry Cafeteria' />
                                        <Selects options={options.currently_rented_out} name='currently_rented_out' label='Currently rented out' />
                                        {values.currently_rented_out === 1 && (
                                            <div className='mt-6'>
                                                <Inputs name='monthly_rent_amount' label='monthly rent amount' />
                                            </div>
                                        )}
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
                                    <div className="">
                                        <LocationDropdown />
                                    </div>
                                    <div className='border-b-2 border-gray-700 my-10' />
                                    <h4 className='text-black font-semibold uppercase'>Availbility:</h4>
                                    <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                        <Selects options={options.possession_status} name='possession_status' label='Choose Any One' />
                                    </div>

                                    {values.possession_status === 'Date' && (
                                        <>
                                            <h4 className='text-black font-semibold uppercase pt-6'>Availabel Form</h4>
                                            <div className='grid gap-6 gap-y-2 md:grid-cols-2'>
                                                <Selects options={options.days} name='day' label='Day' />
                                                <Selects options={options.month} name='month' label='Month' />
                                                <Selects options={options.year} name='year' label='Year' />
                                            </div>
                                        </>
                                    )}

                                    {values.possession_status === 'Immediately' && (
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



export default Residential_rent