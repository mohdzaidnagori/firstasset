'use client'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getToken, removeToken } from '../../redux/services/LocalStorageServices'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useGetLoggedUserQuery, useMobileVerificationSendCodeMutation, useUpdateUserEmailVerificationMutation, useUpdateUserMobileVerificationMutation } from '../../redux/services/userAuthApi'
import axios from '../../redux/services/axios'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { auth } from '../../../firebase'

const Verification = () => {
    const [emailSent, setEmailSent] = useState(false);
    const [mobileSent, setMobileSent] = useState(false);
    const token = getToken('token')
    const router = useRouter()
    const [UpdateUserEmailVerification, { isLoading: isEmailLoading, isSuccess: isEmailSuccess, isError: isEmailError }] = useUpdateUserEmailVerificationMutation();
    const [UpdateUserMobileVerification, { isLoading: isMobileLoading, isSuccess: isMobileSuccess, isError: isMobileError }] = useUpdateUserMobileVerificationMutation();
    const [MobileVerificationSendCode, { isLoading: isMobileSendLoading, isSuccess: isMobileSendSuccess, isError: isMobileSendError }] = useMobileVerificationSendCodeMutation();
    const { data, isSuccess, isLoading } = useGetLoggedUserQuery(token)


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
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        handleMobileSubmit();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }
    const handleMobileSubmit = async () => {
        const url = 'verify-mobile';

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
                    setMobileSent(true)
                }
                if (response.data.status === 'failed') {
                    toast.error(response.data.message)
                }
            })
            .catch(error => {
                console.error(error);
            });
        checkStatus();  
        // const otp = prompt("Enter the OTP"); // Prompt the user to enter the OTP
        // console.log(otp)
        // await MobileVerificationSendCode({ token, otp: otp })
        //     .then(response => {
        //         console.log(response.data)
        //         if (response.data.status === 'success') {
        //             toast.success(response.data.message)
        //             setMobileSent(true);
        //         }
        //         if (response.data.status === 'failed') {
        //             toast.error(response.data.message)
        //         }
        //     })
        //     .catch(error => {
        //         toast.error(error.toString());
        //     });
    };
    const handleMobileVerify = async (values) => {
        console.log(values)
        await UpdateUserMobileVerification({ token, values })
            .then(response => {
                console.log(response.data)
                if (response.data.status === 'success') {
                    toast.success(response.data.message)
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
        const verifyMobileStatus = () => {
            const url = 'mobile_status';
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // Set the bearer token
                }
            };
            axios.post(url, {}, config)
                .then(response => {
                    console.log(response.data);
                    if (response.data.success === true) {
                        setMobileSent(false)
                    }
                    if (response.data.success === false) {
                        setMobileSent(true)
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        };
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
        verifyMobileStatus();
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
                                    <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email Otp</label>
                                    <Field type="text" disabled={!emailSent} name="otp" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email otp" required="" />
                                    <ErrorMessage className="mt-3 text-red-700" name="otp" component="div" />
                                    <div className='mt-4 flex justify-between'>
                                        {
                                            !emailSent
                                                ?
                                                <button type='button' onClick={handleEmailSubmit} className='p-2 px-10 bg-teal-500 rounded-full text-white'>Send</button>
                                                :
                                                <button type='submit' className='p-2 px-10 bg-teal-500 rounded-full text-white'>Verify</button>
                                        }


                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        <Formik initialValues={initialValues} onSubmit={handleMobileVerify}>
                            <Form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your Password Otp</label>
                                    <Field type="text" disabled={!mobileSent} name="otp" id="otp" placeholder="mobile otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <ErrorMessage className="mt-3 text-red-700" name="otp" component="div" />
                                    <div className='mt-4 flex justify-between'>
                                        {
                                            !mobileSent ? <button type="button" onClick={handleMobileSubmit} className='p-2 px-10 bg-teal-500 rounded-full text-white'>Send</button>
                                                : <button className='p-2 px-10 bg-teal-500 rounded-full text-white'>Verify</button>
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