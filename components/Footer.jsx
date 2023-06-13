import Link from 'next/link'
import React from 'react'
import { GrLocation } from 'react-icons/gr';
import { AiOutlineMail, AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className=" bg-slate-900 text-white">
            <div className="md:px-20 pl-16 py-10 md:py-16">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                    <div>
                        <Link href="#" className="text-2xl">
                            First/Assets
                        </Link>
                        <p className="text-lg mt-3 max-w-[25ch]">
                            A great platform to buy, sell and rent your properties without any agent or comissions
                        </p>
                    </div>

                    <ul className="text-md">
                        <li>
                            <p className="text-xl mb-2">Company</p>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#about">
                                <span className="span">&lt; &nbsp;About us</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#services" className="footer-link">
                                <span className="span">&lt; &nbsp;Home</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#properties" className="footer-link">
                                <span className="span">&lt; &nbsp;First Assets Team</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#contact" className="footer-link">
                                <span className="span">&lt; &nbsp;Contact us</span>
                            </Link>
                        </li>

                        <li className="py-1 hover:text-teal-500">
                            <Link href="#" className="footer-link">
                                <span className="span">&lt; &nbsp;Login</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="text-md max-w-[25ch]">
                        <li>
                            <p className="footer-list-title text-xl">More Links</p>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#" className="footer-link">
                                <span className="span">&lt; &nbsp;Fractional Ownership
                                    Fractional</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#" className="footer-link">
                                <span className="span">&lt; &nbsp;Investment Process
                                    Fractional &nbsp;&nbsp;&nbsp;&nbsp;Structure
                                    of Investment</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#" className="footer-link">
                                <span className="span">&lt; &nbsp;Why FIRST/ASSET</span>
                            </Link>
                        </li>
                        <li className="py-1 hover:text-teal-500">
                            <Link href="#" className="footer-link">
                                <span className="span">&lt; &nbsp;FAQs</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="text-lg">
                        <li>
                            <p className="text-2xl mb-3">Contact Details</p>
                        </li>

                        <li className="py-2 flex gap-2">
                            <div className="iconreact pt-1 md:p-2">
                                <GrLocation />
                            </div>
                            {/* <ion-icon name="location-outline"></ion-icon> */}
                            <div className="address">
                                10 Southlands Road
                                Suite 558,
                                United Kingdom <br />
                                <Link href="#" className="text-teal-500 hover:underline">View on Google Maps</Link>
                            </div>
                        </li>

                        <li className="py-2 flex gap-2">
                            <div className="iconreact p-2">
                                <AiOutlineMail />
                            </div>
                            <Link href="mailto: codemyhobby9@gmail.com" className="hover:text-teal-500 hover:underline">Codemyhobby9@gmail.com</Link>
                        </li>

                        <li className="py-2 flex gap-2">
                            <div className="iconreact p-2">
                                <AiOutlinePhone />
                            </div>
                            <Link href="tel: 000-111-22233" className="footer-link">000-111-22233</Link>
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