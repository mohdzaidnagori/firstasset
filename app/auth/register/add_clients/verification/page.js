'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getToken, removeToken } from '../../../../redux/services/LocalStorageServices'
import axios from '../../../../redux/services/axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useGetLoggedUserQuery, useGetSendClientMailQuery, useUpdateUserEmailVerificationMutation, useUpdateUserMobileVerificationMutation } from '../../../../redux/services/userAuthApi'
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../../../../firebase'

const Verification = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [mobileSent, setMobileSent] = useState(false);
    const token = getToken('client_token')
    const router = useRouter()
    const [UpdateUserEmailVerification, { isLoading: isEmailLoading, isSuccess: isEmailSuccess, isError: isEmailError }] = useUpdateUserEmailVerificationMutation();
    const [UpdateUserMobileVerification, { isLoading: isMobileLoading, isSuccess: isMobileSuccess, isError: isMobileError }] = useUpdateUserMobileVerificationMutation();
    const { data, isSuccess, isLoading ,refetch} = useGetLoggedUserQuery(token)
    const handleEmailSubmit = () => {
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
                }
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                }
            })
            .catch(error => {
                console.error(error);
            });
        checkStatus();

    }
    const handleEmailVerify = async (values) => {
        console.log(values)
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
        else{
            console.log('zaid')
        }
    }
    const handleMobileverify = () => {
        onCaptchVerify();
        const phoneNumber = data?.data.phone_no
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                toast.success('mobile otp send')
                refetch()
                setMobileSent(true)
            }).catch((error) => {
                toast.error('unexpected error')
                console.log(error)
            });
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
                        refetch()
                        setMobileSent(false)
                        checkStatus()
                    }
                    if (response.data.status === 'failed') {
                        toast.error(response.data.message)
                    }
                })
                .catch(error => {
                    console.error(error);
                });

            toast.success('Mobile Number is Successfully Verify')
        }).catch((error) => {
            toast.error('invalid otp')
        });


    };
 
  
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
                    if (token) {
                        axios.get("check_send_email", config)
                            .then(res => {
                                if (res.data.status === 'success') {
                                    toast.success(res.data.msg, {
                                        duration: 4000,
                                    });
                                    removeToken('client_token')
                                    router.push('/')
                                }
                            })
                    }

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
        verifyEmailStatus();
        checkStatus();
    }, []);

    const initialValues = {
        otp: '',
    };
    return (
        <section className="bg-white dark:bg-gray-900 -mt-20" >
            <div id="recaptcha-container"></div>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <Image className="mr-2" src="/assets/logo.jpg" alt="logo first asset" width={200} height={200} />
                </Link>
                <div className="w-full bg-white rounded-xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Verification
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
                                                <button type='button' disabled={emailButtonCheck ? true : false} onClick={handleEmailSubmit} className={`p-2 px-10 ${emailButtonCheck ? 'bg-teal-300' : 'bg-teal-500'}  rounded-full text-white `}>{emailButtonCheck ? 'Loading...' : 'Send otp for email'}</button>
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
                                     <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Mobile Otp</label>
                                    <Field type="text" name="otp" id="otp" placeholder="mobile otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <ErrorMessage className="mt-3 text-red-700" name="otp" component="div" />
                                    </>
                                   }
                                    <div className='mt-4 flex justify-between'>
                                        {
                                            data?.data?.is_mobile_verified == '0' ?
                                            mobileSent ?
                                                <button type="submit" className='p-2 px-10 bg-teal-500 rounded-full text-white'>Verify</button>
                                                :
                                                <button type='button' disabled={mobileButtonCheck ? true : false} onClick={handleMobileverify} className={`p-2 px-10 ${mobileButtonCheck ? 'bg-teal-300' : 'bg-teal-500'}  rounded-full text-white `}>{mobileButtonCheck ? 'Loading...' : 'Send otp for mobile'}</button>
                                                :
                                                <div className='text-green-500'>Mobile Is Verified Successfully</div>
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