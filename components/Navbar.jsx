'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useGetLoggedUserQuery } from '../app/redux/services/userAuthApi';
import { getToken } from '../app/redux/services/LocalStorageServices';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../app/redux/features/userSlice';
import { setUserToken } from '../app/redux/features/authSlice';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const token = getToken('token')
  const { data, isSuccess, isLoading } = useGetLoggedUserQuery(token)
console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.data.email,
        name: data.data.name,
        contact_person: data.data.contact_person,
        is_mobile_verified: data.data.is_mobile_verified,
        is_verified: data.data.is_verified,
      }))
    }
  }, [data, isSuccess, dispatch])
  useEffect(() => {
    dispatch(setUserToken({ token: token }))
  }, [token, dispatch])


  return (
    <nav className="w-full bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>

          <div className="flex items-center justify-between py-3 md:block">
            <Link href="#">
              <Image src='/assets/logo.jpg' alt="logo first asset" width={120} height={120} />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
              }`}
          >
            <ul className="items-center justify-center font-medium space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black">
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className="text-black">
                <Link href="/team">
                  FIRST/ASSET Team
                </Link>
              </li>
              <li className="text-black">
                <Link href="/about">
                  About US
                </Link>
              </li>
              <li className="text-black">
                <Link href="/contact">
                  Contact US
                </Link>
              </li>

              {!isLoading && !isSuccess &&
                <Link href='auth/login'>
                  <button className='bg-teal-500 max-w-max rounded-full px-9 py-2.5 font-medium text-white'>Login</button>
                </Link>
              }
              { !isLoading && isSuccess &&
                <Link href='/logout'>
                  <button className='bg-teal-500 max-w-max rounded-full px-9 py-2.5 font-medium text-white'>Logout</button>
                </Link>
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar