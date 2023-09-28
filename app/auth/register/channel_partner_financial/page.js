'use client'
import React, { useEffect } from 'react'
import { Formik, Form } from 'formik';
import Checkboxs from '../../../../components/userForm/Checkboxs';
import Selects from '../../../../components/userForm/Selects';
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

const ChannelPartner_financial = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const token = getToken('token')
    const { isSuccess, isLoading } = useGetLoggedUserQuery(token)
    useEffect(() => {
        if (isSuccess && !isLoading) {
            router.push('auth/verification')
        }
    }, [isSuccess, isLoading])
    const options = {
        interested_in: ['Fractional Investment', 'Property Management', 'Sole selling projects with FIRST/ASSET'],
        who_you_are: ['Mutual Fund Distributors', 'IFA', 'Wealth Managers', 'Insurance Agents'],
        no_of_clients: [
            {
                value: '<50', label: '<50'
            },
            {
                value: '50-100', label: '50-100'
            },
            {
                value: '100-200', label: '100-200'
            },
            {
                value: '>200', label: '>200'
            }
        ],
        assets_under_management: [
            {
                value: '<50cr', label: '<50cr'
            },
            {
                value: '50cr-100cr', label: '50cr-100cr'
            },
            {
                value: '100cr-200cr', label: '100cr-200cr'
            },
            {
                value: '>200cr', label: '>200cr'
            }
        ],

    };
    const initialValues = {
        name: '',
        contact_person: '',
        email: '',
        phone: '',
        password: '',
        address:'',
        password_confirmation: '',
        interested_in: '',
        who_you_are: '',
        no_of_clients: '',
        assets_under_management: '',
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        contact_person: Yup.string().required('Contact person is required'),
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
        who_you_are: Yup.array()
            .of(Yup.string())
            .min(1, 'At least one option must be selected for interest')
            .required('Who You Are in is required'),
        no_of_clients: Yup.string().required('No. of Client Field is required'),
        assets_under_management: Yup.string().required('Assets Under managment value is required'),
    });

    const handleSubmit = (values) => {
        console.log(values)
        const data = {
            name: values.name,
            contact_person: values.contact_person,
            email: values.email,
            phone_no: values.phone,
            address:values.address,
            password: values.password,
             is_mobile_verified:1,
            password_confirmation: values.password_confirmation,
            interested_in: values.interested_in,
            who_you_are: values.who_you_are,
            no_of_clients: values.no_of_clients,
            assets_under_management: values.assets_under_management,
        }


        axios.post('brokerfinancial-register', data)
            .then(response => {
                // Handle success
                console.log(response);
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                }
                if (response.data.status === 'success') {
                    // toast.success(response.data.message)
                    dispatch(setUserToken({ token: response.data.token }))
                    storeToken(response.data.token, 'token')
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
        <>
            {
                !isLoading && !isSuccess &&
                <section className='w-full flex justify-center py-10'>
                    <div className='lg:shadow-2xl lg:p-20 lg:rounded-xl p-10'>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                            <Form>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <Inputs name='name' label='Name/Organization Name:' />
                                    <Inputs name='contact_person' label='Contact Person (option of same as above):' />
                                    <Inputs name='email' label='Email' />
                                    <Inputs name='address' label='Address' />
                                    <PhoneInputField name="phone" label='Phone No. (Email and Phone No. verification with OTP):' />
                                    <Inputs name='password' label='Password' />
                                    <Inputs name='password_confirmation' label='Confirm Password:' />
                                </div>
                                <div className='border-b-2 border-gray-700 my-10' />
                                <div className='mt-2'>
                                    <Checkboxs options={options.interested_in} name='interested_in' label='Interested in' />
                                </div>
                                <div className='border-b-2 border-gray-700 my-10' />
                                <div className='mt-2'>
                                    <Checkboxs options={options.who_you_are} name='who_you_are' label='Who You Are' />
                                </div>
                                <div className='border-b-2 border-gray-700 my-10' />
                                <div className='grid gap-6 gap-y-2 md:grid-cols-2 mt-2'>
                                    <Selects options={options.no_of_clients} name='no_of_clients' label='No. of Client' />
                                    <Selects options={options.assets_under_management} name='assets_under_management' label='Asset Under Management' />
                                </div>
                                <div className="mt-14 text-center">
                                    <button type="submit" className='bg-teal-500 p-3 px-14 text-white font-semibold rounded-full'>Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>

            }
        </>

    )
}

export default ChannelPartner_financial
