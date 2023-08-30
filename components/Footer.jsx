'use client'
import Link from 'next/link'
import React from 'react'
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { useGetLoggedUserQuery } from '../app/redux/services/userAuthApi';
import { getToken } from '../app/redux/services/LocalStorageServices';

const Footer = () => {
    const token = getToken('token')
    const { data, isSuccess, isLoading } = useGetLoggedUserQuery(token)
    console.log(data)

    return (
        <footer className=" bg-slate-900 text-white">
            <div className="md:px-20 pl-16 py-10 md:py-16">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                    <div>
                        <Link href="#" className="text-2xl">
                            FIRST/ASSET
                        </Link>
                        <p className="text-lg mt-3 max-w-[25ch]">
                            Elevating Real Estate Possibilities: Your Journey, Our Platform.
                        </p>
                    </div>

                    <ul className="text-md">
                        <li>
                            <p className="text-xl mb-2">Company</p>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/" className="footer-link">
                                <span className="span">&lt; &nbsp;Home</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/team">
                                <span className="span">&lt; &nbsp;About FIRST/ASSET</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/terms" className="footer-link">
                                <span className="span">&lt; &nbsp;Terms & conditions</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/privacy" className="footer-link">
                                <span className="span">&lt; &nbsp;Privacy Policy</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/disclaimer" className="footer-link">
                                <span className="span">&lt; &nbsp;Disclaimer</span>
                            </Link>
                        </li>

                        {
                            <li className="py-1 hover:text-teal-500">
                                {isSuccess && (data?.user_type === 'Broker' || data?.user_type === 'BrokerFinancial') &&
                                    <Link href="auth/register/add_clients" className="footer-link">
                                        <span className="span">&lt; &nbsp;Add Client</span>
                                    </Link>
                                }
                            </li>
                        }
                    </ul>

                    <ul className="text-base max-w-[25ch]">
                        <li>
                            <p className="footer-list-title text-xl">More Links</p>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/fractional/structure_investment" className="footer-link">
                                <span className="span">&lt; &nbsp;Structure
                                    of Investment</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/fractional/investment_process" className="footer-link">
                                <span className="span">&lt; &nbsp;Investment Process
                                    Fractional &nbsp;&nbsp;</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/fractional/why_first_asset" className="footer-link">
                                <span className="span">&lt; &nbsp;Why FIRST/ASSET</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="/faqs" className="footer-link">
                                <span className="span">&lt; &nbsp;FAQs</span>
                            </Link>
                        </li>

                    </ul>

                    <ul className="text-base">
                        <li>
                            <p className="text-xl">Contact Details</p>
                        </li>

                        <li className="flex gap-2">
                            <div className="iconreact pt-1 md:p-2">
                                <GrLocation />
                            </div>

                            <div className="address w-[20ch]">
                                Akruti Star, Level One, Central Road, MIDC,Andheri East, Mumbai - 93<br />
                                <Link href="https://www.google.com/maps/place/Akruti+Star,+Kondivita,+Andheri+East,+Mumbai,+Maharashtra+400069/@19.1184172,72.8655616,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c83cb6c669c5:0x28276204c2a9cb40!8m2!3d19.1184329!4d72.8704711!16s%2Fg%2F11qs96_tly?entry=ttu" className="text-teal-500 hover:underline">View on Google Maps</Link>
                            </div>
                        </li>

                        <li className="py-2 flex gap-2">
                            <div className="iconreact p-2">
                                <AiOutlineMail />
                            </div>
                            <Link href="mailto:first-asset@firstcapital.in" className="hover:text-teal-500 hover:underline md:text-sm lg:text-lg">first-asset@firstcapital.in</Link>
                        </li>

                        <li className="py-2 flex gap-2">
                            <div className="iconreact p-2">
                                <AiOutlinePhone />
                            </div>
                            <Link href="tel: +912240069191" className="footer-link">+91-22-40069191</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-3 border-t border-teal-500">
                <div className="flex justify-around items-center flex-col md:flex-row">
                    <p className="md:w-max text-center w-[35ch] pb-3 md:pb-0">
                        &copy; 2022 ASAP Asset Holdings Private Limited. All Rights Reserved.
                    </p>

                    <ul className="flex gap-4">
                        <li>
                            <Link href="#">
                                <div className="iconreact hover:bg-teal-700 text-xl p-2 rounded-lg">
                                    <AiOutlineFacebook />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="social-link">
                                <div className="iconreact hover:bg-teal-700 text-xl p-2 rounded-lg">
                                    <AiOutlineInstagram />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="iconreact hover:bg-teal-700 text-xl p-2 rounded-lg">
                                    <AiOutlineLinkedin />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="iconreact hover:bg-teal-700 text-xl p-2 rounded-lg">
                                    <AiOutlineTwitter />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer