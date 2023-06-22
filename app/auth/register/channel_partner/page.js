'use client'
import React, { useEffect } from 'react'
import { Formik, Form } from 'formik';
import LocationDropdown from '../../../../components/statecity/LocationDropdown';
import Checkboxs from '../../../../components/userForm/Checkboxs';
import Selects from '../../../../components/userForm/Selects';
import Inputs from '../../../../components/userForm/Inputs';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { setRegisterToken } from '../../../redux/features/registerSlice';
import { useDispatch } from 'react-redux';
import { getToken, storeToken } from '../../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';

const ChannelPartner = () => {
    const options = {
        interested_in: ['Fractional', 'Property Management', 'Sole selling projects with FIRST/ASSET'],
        property_types: [
            'Commercial Space',
            'Residential Apartment',
            'Warehouses',
            'Villa/Farm House',
            'Agriculture Land/Farm Land',
        ],
        ticket_size_sale: [
            {
                value: '<50L', label: '<50L'
            },
            {
                value: '50L-2cr', label: '50L-2cr'
            },
            {
                value: '2cr-5cr', label: '2cr-5cr'
            },
            {
                value: '>5cr', label: '>5cr'
            }
        ],
        ticket_size_lease: [
            {
                value: '<25K', label: '<25K'
            },
            {
                value: '25K-50K', label: '25K-50K'
            },
            {
                value: '50K-1L', label: '50K-1L'
            },
            {
                value: '>1L', label: '>1L'
            }
        ],
        transactional_value: [
            {
                value: '5cr-10cr', label: '5cr-10cr'
            },
            {
                value: '10cr-25cr', label: '10cr-25cr'
            },
            {
                value: '25cr-100cr', label: '25cr-100cr'
            },
            {
                value: '>100cr', label: '>100cr'
            }
        ],
        fractional_investment_size: [
            {
                value: 'Up to 1.5cr', label: 'Up to 1.5cr'
            },
            {
                value: '1.5cr-2.5cr', label: '1.5cr-2.5cr'
            },
            {
                value: '2.5cr-5cr', label: '2.5cr-5cr'
            },
            {
                value: '>5cr', label: '>5cr'
            }
        ],
    };
    const initialValues = {
        name: '',
        contact_person: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        state: null,
        city: null,
        locality: null,
        interested_in: '',
        property_types: '',
        ticket_size_sale: '',
        ticket_size_lease: '',
        transactional_value: '',
        fractional_investment_size: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        contact_person: Yup.string().required('Contact person is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone is required'),
        password: Yup.string().required('Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password confirmation is required'),
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
        interested_in: Yup.array()
            .of(Yup.string())
            .min(1, 'At least one option must be selected for interest')
            .required('Interested in is required'),
        property_types: Yup.array()
            .of(Yup.string())
            .min(1, 'At least one property type must be selected')
            .required('Property type is required'),
        ticket_size_sale: Yup.string().required('Ticket size for sale is required'),
        ticket_size_lease: Yup.string().required('Ticket size for lease is required'),
        transactional_value: Yup.string().required('Transactional value is required'),
        fractional_investment_size: Yup.string().required('Fractional investment size is required'),
    });
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSubmit = (values) => {

        const data = {
            name: values.name,
            contact_person: values.contact_person,
            email: values.email,
            phone_no: `+91${values.phone}`,
            password: values.password,
            password_confirmation: values.password_confirmation,
            state: values.state.value,
            city: values.city.value,
            locality: values.locality.value,
            interested_in: values.interested_in,
            property_types: values.property_types,
            ticket_size_sale: values.ticket_size_sale,
            ticket_size_lease: values.ticket_size_lease,
            transactional_value: values.transactional_value,
            fractional_investment_size: values.fractional_investment_size
        }
       
        
        axios.post('http://127.0.0.1:8000/api/user/broker-register', data)
            .then(response => {
                // Handle success
                console.log(response);
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                }
                if (response.data.status === 'success') {
                    toast.success(response.data.message)
                    dispatch(setRegisterToken({ token: response.data.token }))
                    storeToken(response.data.token)
                    router.push('auth/verification')
                }

            })
            .catch(error => {
                if (error.response && error.response.status === 422) {
                    // Validation errors
                    console.log('Validation errors:', error.response.data.errors);
                    const errors = error.response.data.errors;
                    Object.values(errors).map(errorMessages => {
                        errorMessages.map(errorMessage => {
                            toast.error(errorMessage);
                        });
                    });
                } else {
                    // Other errors
                    console.error('Error storing data:', error);
                }
            });
    };
   
    return (
        <section className='w-full flex justify-center py-10'>
            <div className='lg:shadow-2xl lg:p-20 lg:rounded-xl p-10'>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Inputs name='name' label='Name/Organization Name:' />
                            <Inputs name='contact_person' label='Contact Person (option of same as above):' />
                            <Inputs name='email' label='Email' />
                            <Inputs name='phone' label='Phone No. (Email and Phone No. verification with OTP):' />
                            <Inputs name='password' label='Password' />
                            <Inputs name='password_confirmation' label='Confirm Password:' />
                        </div>
                        <div className='border-b-2 border-gray-700 my-10' />
                        <div className="my-3">
                            <LocationDropdown />
                        </div>
                        <div className='border-b-2 border-gray-700 my-10' />
                        <div className='mt-2'>
                            <Checkboxs options={options.interested_in} name='interested_in' label='Interested in' />
                        </div>
                        <div className='border-b-2 border-gray-700 my-10' />
                        <div className='mt-2'>
                            <Checkboxs options={options.property_types} name='property_types' label='Deals in which Property Types' />
                        </div>
                        <div className='border-b-2 border-gray-700 my-10' />
                        <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                            <Selects options={options.ticket_size_sale} name='ticket_size_sale' label='Average ticket size (Sale/Purchase)' />
                            <Selects options={options.ticket_size_lease} name='ticket_size_lease' label='Average Lease/Rent Ticket Size' />
                            <Selects options={options.transactional_value} name='transactional_value' label='Annual Transactional Value' />
                        </div>
                        <div className="mt-2">
                            <Selects options={options.fractional_investment_size} name='fractional_investment_size' label='Amount of 25-50 Lakh ticket size Fractional Investment you can onboard to FIRST/ASSET' />
                        </div>
                        <div className="mt-14 text-center">
                            <button type="submit" className='bg-teal-500 p-3 px-14 text-white font-semibold rounded-full'>Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>

    )
}

export default ChannelPartner
