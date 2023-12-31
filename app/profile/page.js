"use client"
import React, { useState } from 'react'
import { getToken } from '../redux/services/LocalStorageServices'
import { useGetLoggedUserQuery } from '../redux/services/userAuthApi'
import Link from 'next/link'
import { useEffect } from 'react'
import axios from '../redux/services/axios'


const Profile = () => {
    const token = getToken('token')
    const [open, setOpen] = useState(false)
    const [copen, setCopen] = useState(false)
    const [clientData, setClientData] = useState([])
    const [propertyData, setPropertyData] = useState({
        commercialRents: [],
        commercialSales: [],
        residentialRents: [],
        residentialSales: [],
    });
    const { data, isSuccess, isLoading } = useGetLoggedUserQuery(token)
    const config = {
        headers: {
            'Authorization': `Bearer ${token}` // Set the bearer token
        }
    };

    useEffect(() => {
        const broker_client = () => {
            axios.get(`broker_client/${data?.user_type}`, config)
                .then(response => {
                    // Handle the data from the response
                    setClientData(response.data.data)
                })
                .catch(error => {
                    console.log(error)
                });
        }

        const user_profile = () => {
            axios.get(`user_profile_property/${data?.data?.id}`, config)
                .then(response => {
                    // Handle the data from the response
                    const { commercialRents, commercialSales, residentialRents, residentialSales } = response.data;
                    setPropertyData({
                        commercialRents,
                        commercialSales,
                        residentialRents,
                        residentialSales,
                    });
                })
                .catch(error => {
                    console.log(error)
                });
        }

        if (data?.user_type === 'Broker' || data?.user_type === 'BrokerFinancial') {
            broker_client()
        }
        if (data?.user_type === 'ClientUser' || data?.user_type === 'ClientBroker') {
            user_profile()
        }

    

    }, [data, isSuccess, isLoading])
    
    return (
        <main className="profile-page">
            {open &&
                <div className="fixed top-0 left-0 right-0  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center">
                    <div className="relative w-full max-w-2xl max-h-full">

                        <div className="relative bg-white rounded-lg shadow-2xl">

                            <div className="flex items-start justify-between p-4 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Delete Account
                                </h3>
                                <button type="button" onClick={() => setOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <p className="md:text-lg leading-relaxed text-black">
                                    <span className='text-red-600'>Warning:</span> {`Deleting your account will result in the permanent removal of all your personal data, posts, messages, and any other information associated with your account. This action cannot be undone. If you proceed, you will lose access to your account and all its contents immediately.
                                    Please be aware that this process is irreversible, and we won't be able to recover any of your data once it's deleted. If you have any concerns or questions about this process, or if you wish to request a delete your account permanantly, please contact our support team at`} <Link className='text-red-500 font-bold underline' href="mailto:firstasset@firstasset.in">firstasset@firstasset.in</Link> for assistance.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                copen &&
                <div className="fixed top-0 left-0 right-0  z-[999] bg-gray-800/30 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] max-h-full md:inset-0 flex justify-center">
                    <div className="relative w-full max-w-2xl max-h-full">

                        <div className="relative bg-white rounded-lg shadow-2xl">

                            <div className="flex items-start justify-between p-4 border-b rounded-t">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    Clients
                                </h3>
                                <button type="button" onClick={() => setCopen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-6 md:px-12 space-y-6 overflow-y-auto h-[400px]">
                                <div className='grid md:grid-cols-3 grid-cols-2 gap-8'>
                                    {
                                        clientData?.map((client, index) => {
                                            return (
                                                <div key={index} className='overflow-hidden'>
                                                    <div className='relative rounded-xl  text-white h-[120px] uppercase bg-green-600 text-6xl flex justify-center items-center'>
                                                        {client?.name.charAt(0)}
                                                    </div>
                                                    <div className='flex items-center justify-between'>
                                                        <h3 className='mt-1 text-[16px] md:text-base truncate text-black md:w-[100px] w-[80px]'>{client?.name}</h3>
                                                        <Link
                                                            href={{
                                                                pathname: '/profile/client',
                                                                query:
                                                                {
                                                                    name: client?.name,
                                                                    address: client?.address,
                                                                    email: client?.email,
                                                                    phone_no: client?.phone_no,
                                                                    user_type: client?.user_type,
                                                                    locality: client?.locality,
                                                                    id: client?.id
                                                                },
                                                            }}
                                                            className='block mt-1 text-xs  underline  text-teal-900'>View More</Link>
                                                    </div>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                      
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            <section className="relative block h-[500px]">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }} >
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </section>
            <section className="relative py-4 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words py-2 md:py-0 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <div className="shadow-xl bg-teal-900 rounded-full h-[150px] align-middle border-none absolute md:-m-20 -ml-20 lg:-ml-18 w-[150px] flex justify-center items-center text-[80px] text-white uppercase" >
                                            {data?.data?.name.charAt(0)}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="md:py-6 pt-10 text-center md:text-right px-3 mt-32 md:mr-0 mr-4 sm:mt-0">
                                        <button className="cursor-none bg-teal-900 active:bg-teal-600 uppercase text-white font-bold hover:shadow-md shadow text-sm px-6 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" >
                                            {data?.data?.user_type}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    {


                                        isSuccess && (data?.user_type === 'Broker' || data?.user_type === 'BrokerFinancial') ?

                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">

                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase text-black">Total Clients</span><span className="text-xl font-bold block uppercase text-black">{clientData?.length}</span><br /><button onClick={() => setCopen(true)} className='outline-none underline border-none text-teal-900 -mt-6 block w-[100%]'>List</button>
                                                </div>

                                            </div>
                                            :
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">

                                                <div className="lg:mr-4 p-1 lg:p-0 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData?.commercialRents.length}</span><span className="text-sm text-blueGray-400">Commercial Rent</span><br /><Link href="profile/c_rents" className='underline text-teal-900'>view</Link>
                                                </div>
                                                <div className="lg:mr-4 p-1 lg:p-0 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData?.commercialSales.length}</span><span className="text-sm text-blueGray-400">Commercial Sale</span><br /><Link href="profile/c_sales" className='underline text-teal-900'>view</Link>
                                                </div>
                                                <div className="lg:mr-4 p-1 lg:p-0 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData?.residentialRents.length}</span><span className="text-sm text-blueGray-400">Residential Rent</span><br /><Link href="profile/r_rents" className='underline text-teal-900'>view</Link>
                                                </div>
                                                <div className="lg:mr-4 p-1 lg:p-0 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData?.residentialSales.length}</span><span className="text-sm text-blueGray-400">Residential Sale</span><br /><Link href="profile/r_sales" className='underline text-teal-900'>view</Link>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 uppercase text-gray-700">
                                    {data?.data?.name}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    {data?.data?.locality}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Mobile - {data?.data?.phone_no}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-black"></i>Email - {data?.data?.email}
                                </div>
                            </div>
                            <div className="mt-10 py-3 pb-4 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-black">
                                            Address <br />
                                            {data?.data?.address}
                                        </p>
                                        <button onClick={() => setOpen(true)} type='button' className=" bg-red-700 uppercase text-white py-2 font-semibold text-sm px-6 rounded" >
                                            Delete Your Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile