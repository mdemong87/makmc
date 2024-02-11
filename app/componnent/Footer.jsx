
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Logo from "../../public/footerLogo.png";
import footerImage from "../../public/subfooter.jpg";
import Container from "./Container";


export default function Footer() {
    return (
        <footer className="pbg w-screen h-fit">
            <div className="relative  border-b-4 border-green-400">
                <Image className="w-full z-0" src={footerImage} alt="footer-image" />
                <div className="absolute top-0 footerImageBg h-full w-full"></div>
            </div>
            <Container>
                <div className="flex pt-6 flex-col md:flex-row gap-7 md:gap-0 justify-between my-8">
                    <div className="w-full h-fit flex items-center justify-center md:justify-start">
                        <Image src={Logo} priority={true} alt="Logo" />
                    </div>
                    <div className="w-full h-fit">
                        <h2 className="text-xl text-gray-100 font-semibold">Help</h2>
                        <ul className="mt-4">
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>About us</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Audiences Registration</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Members Registration</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Privacy Policy</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-fit">
                        <h2 className="text-xl text-gray-100 font-semibold">Explore</h2>
                        <ul className="mt-4">
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Programs</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Audiences Registration</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Members Application</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-fit">
                        <h2 className="text-xl text-gray-100 font-semibold">Get In Touch</h2>
                        <ul className="mt-4">
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Address: Borabo,Mowchak,Kaliakoir,Gazipur</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>Helpline: +88 01986-404986</Link>
                            </li>
                            <li className="py-1 text-gray-300 hover:text-gray-100">
                                <Link className="font-light" href={'/'}>E-mail: mdemong87@gmail.com</Link>
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 mt-5">
                            <Link href='/' className='bg-gray-100 p-3 h-11 w-11 rounded-full flex items-center justify-center pointer hover:bg-gray-200'>
                                <FaFacebookF className="text-2xl pCl" />
                            </Link>
                            <Link href='/' className='bg-gray-100 p-3 h-11 w-11 rounded-full flex items-center justify-center pointer hover:bg-gray-200'>
                                <FaYoutube className="text-2xl pCl" />
                            </Link>
                            <Link href='/' className='bg-gray-100 p-3 h-11 w-11 rounded-full flex items-center justify-center pointer hover:bg-gray-200'>
                                <FaInstagram className="text-2xl pCl" />
                            </Link>
                            <Link href='/' className='bg-gray-100 p-3 h-11 w-11 rounded-full flex items-center justify-center pointer hover:bg-gray-200'>
                                <FaLinkedin className="text-2xl pCl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="sbg h-fit">
                <Container>
                    <div className="flex items-center w-full justify-center py-6 text-gray-300">
                        <div className="text-sm w-fit flex gap-1 flex-col items-center text-center md:flex-row">
                            Copyright © 2024 All Rights Reserved A.A.O.M.A.K.M.C <span className="hidden md:block">||</span>
                            <div className="text-red-300 group relative ">
                                <Link className="text-md font-semibold" href={"https://emonhossen.xyz"}> Contributed By Md Emon Hossen</Link>

                                <p className="absolute top-[-20px] right-0 wbg p-2 rounded-md pCl font-semibold translate-y-[-40px] transition hidden group-hover:block">
                                    Click Here to Show Contributor Portfolio
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}