"use client"

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import styles from "../../styles/Navber.module.css";


export default function Navber() {

    const [isshow, setisshow] = useState(false);
    const [showAboutDrop, setshowAboutDrop] = useState(false);
    const [showRegistrationDrop, setshowRegistrationDrop] = useState(false);

    return (
        <div>
            <nav className="pt-0 h-full w-full md:pt-10 text-gray-50 md:pCl">

                <ul className={`h-screen md:h-full w-full md:flex gap-5 md:gap-6 items-start md:items-center ${styles.navberWrper} ${isshow ? "flex flex-col pbg md:flex-row" : "hidden"}`}>


                    {/* for navber cross icon */}
                    <li className="p-3 pl-6 md:pl-0 md:p-0 w-full flex justify-end md:hidden">
                        <div onClick={() => setisshow(false)} className="bg-gray-300 text-gray-800 p-1 rounded-md cursor-pointer transition hover:rotate-90 focus:rotate-90">
                            <RxCross2 className="text-3xl" />
                        </div>
                    </li>


                    {/* for home nav item */}
                    <li onClick={() => { setisshow(false); setshowAboutDrop(false); setshowRegistrationDrop(false) }} className="p-3 px-6 md:px-0 md:p-0  text-lg font-bold w-[95%] md:w-fit ml-6 md:ml-0 rounded-xl cursor-pointer transition delay-150ms hover:sbg md:hover:wbg">
                        <Link href={'/'}>Home</Link>
                    </li>


                    {/* for about nav item */}
                    <li onClick={() => { setshowAboutDrop(!showAboutDrop); setshowRegistrationDrop(false) }} className="p-3 px-6 md:px-0 md:p-0 text-lg font-bold relative cursor-pointer w-[95%] md:w-fit ml-6 md:ml-0 rounded-xl cursor-pointer transition delay-150ms hover:sbg md:hover:wbg">
                        <p className="flex items-center gap-1 w-full justify-between">
                            <span>About us</span>
                            {
                                showAboutDrop ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />
                            }

                        </p>
                        {
                            showAboutDrop && <div className="h-fit my-5 flex flex-col wbg pCl md:absolute w-full md:w-fit rounded-xl md:rounded-sm headerShadox md:my-0 md:top-12">
                                <Link href={'/about'} onClick={() => setisshow(false)} className="px-3 py-1 text-lg font-normal hover:bg-gray-100 border-b-2 border-gray-100 hover:rounded-t-xl md:hover:rounded-sm">
                                    About Us
                                </Link>
                                <Link href={'/'} onClick={() => setisshow(false)} className="px-3 py-1 text-lg font-normal hover:bg-gray-100 border-b-2 border-gray-100">
                                    Organaization-Stucture
                                </Link>
                                <Link href={'/'} onClick={() => setisshow(false)} className="px-3 py-1 text-lg font-normal hover:bg-gray-100 border-b-2 border-gray-100">
                                    Gothon-Tontho
                                </Link>
                                <Link href={'/'} onClick={() => setisshow(false)} className="px-3 py-1 text-lg font-normal hover:bg-gray-100 hover:rounded-b-xl md:hover:rounded-b-sm">
                                    Misson
                                </Link>
                            </div>
                        }
                    </li>



                    {/* for registration nav item */}
                    <li onClick={() => { setshowRegistrationDrop(!showRegistrationDrop); setshowAboutDrop(false) }}
                        className="p-3 cursor-pointer px-6 md:px-0 md:p-0 text-lg font-bold relative w-[95%] md:w-fit ml-6 md:ml-0 rounded-xl cursor-pointer transition delay-150ms hover:sbg md:hover:wbg">
                        <p className="flex items-center gap-1 w-full justify-between">
                            <span>Registration</span>
                            {
                                showRegistrationDrop ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />
                            }

                        </p>
                        {
                            showRegistrationDrop && <div className="h-fit my-5 flex flex-col wbg pCl md:absolute w-full md:w-fit rounded-xl md:rounded-sm headerShadox md:my-0 md:top-12">
                                <Link href={'/about'} onClick={() => setisshow(false)} className="px-3 py-1 text-lg font-normal border-b-2 border-gray-100 hover:bg-gray-100 w-full hover:rounded-t-xl md:hover:rounded-t-sm">
                                    Audiences Registration
                                </Link>
                                <Link href={'/'} onClick={() => setisshow(false)} className="px-3 py-1 text-lg font-normal hover:bg-gray-100 hover:rounded-b-xl md:hover:rounded-b-sm">
                                    Members Application
                                </Link>
                            </div>
                        }
                    </li>


                    {/* for payment nav item */}
                    <li onClick={() => { setisshow(false); setshowAboutDrop(false); setshowRegistrationDrop(false) }} className="p-3 px-6 md:px-0 md:p-0 text-lg font-bold w-[95%] md:w-fit ml-6 md:ml-0 rounded-xl cursor-pointer transition delay-150ms hover:sbg md:hover:wbg">
                        <Link href={'/payment'}>Payment</Link>
                    </li>



                    {/* for contact us nav item */}
                    <li onClick={() => { setisshow(false); setshowAboutDrop(false); setshowRegistrationDrop(false) }} className="p-3 px-6 md:px-0 md:p-0 text-lg font-bold w-[95%] md:w-fit ml-6 md:ml-0 rounded-xl cursor-pointer transition delay-150ms hover:sbg md:hover:wbg">
                        <Link href={'/'}>Contact us</Link>
                    </li>
                </ul>


                {/* for navbar icon */}
                <div className="md:hidden">
                    <RiBarChartHorizontalLine onClick={() => setisshow(true)} className="pCl font-bold text-3xl rotate-180 cursor-pointer" />
                </div>
            </nav>
        </div >
    )
}