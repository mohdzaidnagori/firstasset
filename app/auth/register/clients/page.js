'use client'
import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik';
import LocationDropdown from '../../../../components/statecity/LocationDropdown';
import Checkboxs from '../../../../components/userForm/Checkboxs';
import Inputs from '../../../../components/userForm/Inputs';
import * as Yup from 'yup';
import axios from '../../../redux/services/axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getToken, storeToken } from '../../../redux/services/LocalStorageServices';
import { useRouter } from 'next/navigation';
import { setUserToken } from '../../../redux/features/authSlice';
import { useGetLoggedUserQuery } from '../../../redux/services/userAuthApi';
import PhoneInputField from '../../../../components/userForm/PhoneInputField';

const Clients = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const token = getToken('token')
    const [loading, setloading] = useState(false)
    const { isSuccess, isLoading } = useGetLoggedUserQuery(token)
    useEffect(() => {

        if (isSuccess && !isLoading) {
            router.push('auth/verification')
        }
    }, [isSuccess, isLoading])
    const options = {
        interested_in: ['Fractional', 'Property Management', 'Sole selling projects with FIRST/ASSET'],
    }
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        password_confirmation: '',
        state: null,
        city: null,
        locality: null,
        interested_in: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().matches(/^\+\d{11,15}$/, 'Invalid phone number').required('Phone is required'),
        password: Yup.string().required('Password is required'),
        password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password confirmation is required'),
        interested_in: Yup.array()
            .of(Yup.string())
            .min(1, 'At least one option must be selected for interest')
            .required('Interested in is required'),
    });

    const handleSubmit = (values) => {
        setloading(true)
        const data = {
            name: values.name,
            email: values.email,
            phone_no: values.phone,
            password: values.password,
            address: values.address,
            password_confirmation: values.password_confirmation,
            is_mobile_verified: 1,
            interested_in: values.interested_in,
        }

        axios.post('clientuser-register', data)
            .then(response => {
                // Handle success
                console.log(response);
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                    setloading(false)
                }
                if (response.data.status === 'success') {
                    toast.success(response.data.message)
                    dispatch(setUserToken({ token: response.data.token }))
                    storeToken(response.data.token, 'token')
                    router.push('auth/verification')
                    setloading(false)
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
                    setloading(false)
                } else {
                    // Other errors
                    console.error('Error storing data:', error);
                    setloading(false)
                }
            });
    };

    return (
        <>
            {!isLoading && !isSuccess &&
                <section className='w-full flex justify-center py-10'>
                    <div className='lg:shadow-2xl lg:p-20 lg:rounded-xl p-10'>
                        <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={handleSubmit}>
                            <Form>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Inputs name='name' label='Name/Organization Name:' />
                                    <Inputs name='email' label='Email' />
                                    <PhoneInputField name="phone" label='Phone No. (Email and Phone No. verification with OTP):' />
                                    <Inputs name='password' label='Password' />
                                    <Inputs name='password_confirmation' label='Confirm Password:' />
                                </div>
                                <div className='border-b-2 border-gray-700 my-10' />
                                <div className="my-3">
                                    <Inputs name='address' label='Address' />
                                </div>
                                <div className='border-b-2 border-gray-700 my-10' />
                                <div className='mt-2'>
                                    <Checkboxs options={options.interested_in} name='interested_in' label='Interested in' />
                                </div>

                                <div className="mt-14 text-center">
                                    <button type="submit" disabled={loading}  className={`${loading ? 'bg-teal-200' : 'bg-teal-500'} p-3 px-14 text-white font-semibold rounded-full`}>Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            }
        </>

    )
}

export default Clients
