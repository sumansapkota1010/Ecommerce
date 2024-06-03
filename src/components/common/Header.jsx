import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";

import { RiHeart3Fill } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx"

import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>

            <header className="">
                <div className="bg-primary text-white ">
                    <div className="container md:flex md:justify-between">
                        <div className="">
                            <CgMail className="inline mr-2" />
                            sumansapkota@gmail.com
                            <FaPhoneVolume className="inline ml-4" /> 9840300084
                        </div>
                        <div className="">

                            <IoLogIn className="inline ml-4" />
                            Login
                            <RiHeart3Fill className="inline ml-4" /> Wishlist
                            <FaShoppingCart className="inline ml-4" />
                        </div>
                        <div></div>
                    </div>
                </div>
            </header>
            <div className="container  py-3 md:py-4 flex lg:gap-10 justify-between items-center ">

                <Link to={"/"}>Hekto</Link>

                <CiMenuBurger onClick={() => {
                    setShowMenu(true)
                }} className="lg:hidden " />


                {/* Sidebar */}
                <div className={`${showMenu ? "translate-x-0" : "translate-x-full lg:translate-x-0"} transition-all fixed  z-50 lg:flex-grow lg:justify-between lg:static lg:text-inherit lg:bg-transparent lg:flex gap-4 right-0 top-0 bottom-0 text-black bg-[#FB2E86] p-4`}>

                    <button><RxCross2 onClick={() => {
                        setShowMenu(false)
                    }} className="lg:hidden" /></button>
                    <ul className="lg:flex gap-4">
                        <li><Link to="/">Home</Link></li>
                        <li>Pages</li>
                        <li><Link to="/products">Products </Link></li>
                        <li>Blog</li>
                        <li>Shop</li>
                        <li>Contact</li>

                    </ul>
                    <form className="flex">
                        <input className="border border-pink-400" type="text" />
                        <button className='bg-[#FB2E86] p-1 '><CiSearch /></button>
                    </form>


                </div>


            </div>





        </>
    )
}

export default Header