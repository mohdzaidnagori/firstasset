'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getToken, removeToken } from '../../redux/services/LocalStorageServices'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useGetLoggedUserQuery, useUpdateUserEmailVerificationMutation, useUpdateUserMobileVerificationMutation } from '../../redux/services/userAuthApi'
import axios from '../../redux/services/axios'
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../../firebase'

const Verification = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [emailButtonCheck, setemailButtonCheck] = useState(false)
    const [mobileButtonCheck, setmobileButtonCheck] = useState(false)
    const [mobileSent, setMobileSent] = useState(false);
    const token = getToken('token') || getToken('not_verify_token');
    const router = useRouter()
    const [UpdateUserEmailVerification, { isLoading: isEmailLoading, isSuccess: isEmailSuccess, isError: isEmailError }] = useUpdateUserEmailVerificationMutation();
    const [UpdateUserMobileVerification, { isLoading: isMobileLoading, isSuccess: isMobileSuccess, isError: isMobileError }] = useUpdateUserMobileVerificationMutation();
    const { data, isSuccess, isLoading,refetch} = useGetLoggedUserQuery(token)

    console.log(data)
    const handleEmailSubmit = () => {
        setemailButtonCheck(true)
        const url = 'verify';
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            }
        };

        // Make the POST request
        axios.post(url, {}, config)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    toast.success(response.data.message)
                    refetch()
                    setEmailSent(true)
                    setemailButtonCheck(false)
                }
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                    setemailButtonCheck(false)
                    setEmailSent(false)
                }
            })
            .catch(error => {
                console.error(error);
            });
        checkStatus();

    }
    const handleEmailVerify = async (values) => {
        await UpdateUserEmailVerification({ token, values })
            .then((response) => {
                console.log(response.data)
                if (response.data.status === 'success') {
                    toast.success(response.data.message)
                    refetch()
                }
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                }
            })
            .catch((error) => {
                console.error(error);
            });

        checkStatus();
    }
    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            const auth = getAuth();
            window.recaptchaVerifier = new RecaptchaVerifier(auth,
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        handleMobileSubmit();
                    },
                    "expired-callback": () => { },
                }
            );
        }
    }
    const handleMobileSubmit = async (values) => {
        window.confirmationResult?.confirm(values?.otp).then((result) => {
            const user = result.user;
            console.log(user)
            const url = 'verify-otp-mobile';
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // Set the bearer token
                }
            };
            axios.post(url, {}, config)
                .then(response => {
                    console.log(response.data);
                    if (response.data.status === 'success') {
                        toast.success(response.data.message)
                        setMobileSent(false)
                        refetch()
                        checkStatus()
                    }
                    if (response.data.status === 'failed') {
                        toast.error(response.data.message)
                    }
                })
                .catch(error => {
                    console.error(error);
                });

            toast.success('Mobile Number is Successfully Verified')
        }).catch((error) => {
            toast.error('invalid OTP')
        });


    };
    const handleMobileverify = () => {
        setmobileButtonCheck(true)
        onCaptchVerify();
        const phoneNumber = data?.data.phone_no
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                toast.success('Mobile OTP sent')
                refetch()
                setMobileSent(true)
                setmobileButtonCheck(false)
            }).catch((error) => {
                toast.error('unexpected error')
                setmobileButtonCheck(false)
            });
    }

    const checkStatus = () => {
        const url = 'check-status';
        const config = {
            headers: {
                'Authorization': `Bearer ${token}` // Set the bearer token
            }
        };
        axios.post(url, {}, config)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 'success') {
                    window.location = '/';
                    removeToken('register_token')
                    removeToken('not_verify_token')
                    toast.success(response.data.msg, {
                        duration: 4000,
                    });
                }

            })
            .catch(error => {
                console.error(error);
            });
    }
    useEffect(() => {
        const verifyEmailStatus = () => {
            const url = 'email_status';
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // Set the bearer token
                }
            };
            axios.post(url, {}, config)
                .then(response => {
                    console.log(response.data);
                    if (response.data.success === true) {
                        setEmailSent(false)
                    }
                    if (response.data.success === false) {
                        setEmailSent(true)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        };
        const checkRegister = () => {
            if (!token) {
                return router.push('/')
            }
        }
        checkRegister()
        // verifyMobileStatus();
        verifyEmailStatus();
        checkStatus();
    }, []);
    const initialValues = {
        otp: '',
    };
    return (
        isSuccess &&
        <section className="bg-white dark:bg-gray-900 -mt-20" >
            <div id="recaptcha-container"></div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen h-[70vh] lg:py-0">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <Image className="mr-2" src="/assets/logo.jpg" alt="logo first asset" width={200} height={200} />
                </Link>
                <div className="w-full bg-white rounded-xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                            Email and Mobile Verification (both Required)
                        </h1>
                        <Formik initialValues={initialValues} onSubmit={handleEmailVerify}>
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    {
                                        emailSent && data?.data?.is_verified == '0' &&
                                        <>
                                            <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email Otp</label>
                                            <Field type="text" disabled={!emailSent} name="otp" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email otp" required="" />
                                            <ErrorMessage className="mt-3 text-red-700" name="otp" component="div" />
                                        </>
                                    }
                                    <div className='mt-4 flex justify-between'>
                                        {
                                            data?.data?.is_verified == '0' ?

                                                !emailSent
                                                    ?
                                                    <button type='button' disabled={emailButtonCheck ? true : false} onClick={handleEmailSubmit} className={`p-2 px-10 ${emailButtonCheck ? 'bg-teal-300' : 'bg-teal-500'}  rounded-full text-white `}>{emailButtonCheck ? 'Loading...' : 'Send OTP for email'}</button>
                                                    :
                                                    <button type='submit' className='p-2 px-10 bg-teal-500 rounded-full text-white'>Verify</button>
                                                :
                                                <div className='text-green-500'>Email Is Verified Successfully</div>

                                        }


                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        <Formik initialValues={initialValues} onSubmit={handleMobileSubmit}>
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    {
                                        mobileSent && data?.data?.is_mobile_verified == '0' &&
                                        <>
                                            <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your mobile Otp</label>
                                            <Field type="text" name="otp" id="otp" placeholder="mobile otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                            <ErrorMessage className="mt-3 text-green-700" name="otp" component="div" />
                                        </>
                                    }
                                    <div className='mt-4 flex justify-between'>
                                        {
                                            data?.data?.is_mobile_verified == '0' ?
                                            mobileSent ?
                                                <button type="submit" className='p-2 px-10 bg-teal-500 rounded-full text-white'>Verify</button>
                                                :
                                                <button type='button' disabled={mobileButtonCheck ? true : false} onClick={handleMobileverify} className={`p-2 px-10 ${mobileButtonCheck ? 'bg-teal-300' : 'bg-teal-500'}  rounded-full text-white `}>{mobileButtonCheck ? 'Loading...' : 'Send OTP for mobile'}</button>
                                                :
                                                <div className='text-green-500'>Mobile Number is Verified Successfully</div>
                                        }
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </section > 
    )
}

export default Verification