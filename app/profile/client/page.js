"use client"
import React, { useState } from 'react'
import { getToken } from '../../redux/services/LocalStorageServices'
import { useGetLoggedUserQuery } from '../../redux/services/userAuthApi'
import Link from 'next/link'
import { useEffect } from 'react'
import axios from '../../redux/services/axios'
import { useSearchParams } from 'next/navigation'


const Profile = () => {

    const query = useSearchParams()
    const token = getToken('token')
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
        const user_profile = () => {
            axios.get(`user_profile_property/${query.get('id')}`, config)
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
            user_profile()
        



    }, [data, isSuccess, isLoading])

    return (
        <main className="profile-page">
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
                                            {query.get('name').charAt(0)}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="md:py-6 pt-10 text-center md:text-right px-3 mt-32 md:mr-0 mr-4 sm:mt-0">
                                        <button className="cursor-none bg-teal-900 active:bg-teal-600 uppercase text-white font-bold hover:shadow-md shadow text-sm px-6 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" >
                                            {query.get('user_type')}
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    {
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">

                                                <div className="md:mr-4 p-1 lg:p-0 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData.commercialRents.length}</span><span className="text-sm text-blueGray-400">Commercial Rent</span><br /><Link href="profile/c_rents" className='underline text-teal-900'>view</Link>
                                                </div>
                                                <div className="md:mr-4 p-1 lg:p-0  text-center">
                                                    <span className="text-xl lg:p-0 font-bold block uppercase tracking-wide text-blueGray-600">{propertyData.commercialSales.length}</span><span className="text-sm text-blueGray-400">Commercial Sale</span><br /><Link href="profile/c_sales" className='underline text-teal-900'>view</Link>
                                                </div>
                                                <div className="lg:mr-4 p-1 lg:p-0 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData.residentialRents.length}</span><span className="text-sm text-blueGray-400">Residential Rent</span><br /><Link href="profile/r_rents" className='underline text-teal-900'>view</Link>
                                                </div>
                                                <div className="lg:mr-4 p-1 lg:p-0  text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{propertyData.residentialSales.length}</span><span className="text-sm text-blueGray-400">Residential Sale</span><br /><Link href="profile/r_sales" className='underline text-teal-900'>view</Link>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 uppercase text-gray-700">
                                    {query.get('name')}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    {query.get('locality')}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Mobile - {query.get('phone_no')}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-black"></i>Email - {query.get('email')}
                                </div>
                            </div>
                            <div className="mt-10 py-3 pb-4 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-black">
                                            Address <br />
                                            {query.get('address')}
                                        </p>
                                       
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