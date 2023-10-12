"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FiChevronDown, FiHome } from 'react-icons/fi';
import { getToken } from '../../app/redux/services/LocalStorageServices';
import { useGetLoggedUserQuery } from '../../app/redux/services/userAuthApi';
import { useRouter } from 'next/navigation';
import { AiFillHome, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiHomeAlt2, BiUser } from 'react-icons/bi';
import toast from 'react-hot-toast';

const Profile = ({ name }) => {
    const [open, setOpen] = useState(false);
    const token = getToken('token')
    const router = useRouter()
    const { data, isSuccess, isLoading } = useGetLoggedUserQuery(token)
    const toggleOpen = () => {
        setOpen(!open);
    };
    const client = isSuccess && (data?.data.clientbroker !== null || data?.data.clientuser !== null)

    const routeHandle = () => {
        if (client) {
            router.push('/project/property_list')
        }
        else {
            toast.error('only client can add Property')
        }

    }

    return (
        <div className="bg-white flex justify-center items-center">
            <div
                onClick={toggleOpen}
                className={`relative border-b-4 border-transparent py-3 ${open ? 'border-indigo-700 transform transition duration-300' : ''}`}
            >
                <div className="bg-white cursor-pointer flex justify-center items-center gap-2">
                    <div className='hover:rotate-180 transition duration-300'>
                        <FiChevronDown />
                    </div>
                    <div className="bg-white min-w-[80px] text-teal-500 md:text-lg ">
                        <div className="cursor-pointer capitalize truncate">{data?.data?.name}</div>
                    </div>
                </div>
                {open && (
                    <div
                        className="absolute -left-20 lg:-left-10 bg-white w-56 md:w-60 px-5 py-3  rounded-lg shadow border mt-5"
                    >
                        <ul className="space-y-3">
                            <li className="font-medium">
                                <Link href="/profile" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-teal-700">
                                    <div className="mr-3">
                                      <BiUser />
                                    </div>
                                    Profile
                                </Link>
                            </li>
                           
                            {isSuccess && (data?.user_type === 'Broker' || data?.user_type === 'BrokerFinancial') ?
                                <li className='font-medium'>
                                    <Link href="auth/register/add_clients" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-teal-700">
                                        <div className="mr-3">
                                            <AiOutlineUsergroupAdd />
                                        </div>
                                        Add Client
                                    </Link>
                                </li>
                                :
                                <li className='font-medium'>
                                    <Link href="profile/myproperty/property" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-teal-700">
                                        <div className="mr-3">
                                            <BiHomeAlt2 />
                                        </div>
                                        My Property
                                    </Link>
                                </li>

                            }

                            <li className="font-medium">
                                <button onClick={routeHandle} className=" w-[100%] flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-teal-700">
                                    <div className="mr-3">
                                        <FiHome />
                                    </div>
                                    Add Property
                                </button>
                            </li>
                            <hr className="dark:border-gray-700" />
                            <li className="font-medium">
                                <Link href="/logout" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                                    <div className="mr-3 text-red-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                    </div>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile