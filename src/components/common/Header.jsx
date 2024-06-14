import React, { useState } from 'react';
import { CgMail } from "react-icons/cg";
import { FaPhoneVolume, FaShoppingCart } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { RiHeart3Fill } from "react-icons/ri";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { logoutReduxUser } from '../../redux/slice/userSlice';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const reduxUser = useSelector((reduxStore) => reduxStore.user.value);
    const cartItems = useSelector((reduxStore) => reduxStore.cart.cartItem);
    const dispatch = useDispatch();
    const params = useParams();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        dispatch(logoutReduxUser());
        navigate("/login");
    };


    let totalCartItems = 0;

    cartItems.map((item => {
        totalCartItems = totalCartItems + item.quantity
    }))

    console.log(params);

    return (
        <>
            <header className="">
                <div className="bg-primary text-white">
                    <div className="py-3 container md:flex md:justify-between">
                        <div>
                            <CgMail className="inline mr-2" />
                            sumansapkota@gmail.com
                            <FaPhoneVolume className="inline ml-4" /> 9840300084
                        </div>
                        <div>
                            {reduxUser && reduxUser.name}

                            {reduxUser ? (
                                <button onClick={handleLogout} className="inline ml-4 text-white bg-transparent border-none cursor-pointer">
                                    <IoLogIn className="inline mr-1" /> Logout
                                </button>
                            ) : (
                                <button onClick={handleLoginClick} className="inline ml-4 text-white bg-transparent border-none cursor-pointer">
                                    <IoLogIn className="inline mr-1" /> Login
                                </button>
                            )}

                            <RiHeart3Fill className="inline ml-4" /> Wishlist
                            <FaShoppingCart className="inline ml-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container py-3 md:py-4 flex lg:gap-10 justify-between items-center">
                <Link to="/">
                    <p className="text-4xl font-bold">Hekto</p>
                </Link>
                <CiMenuBurger onClick={() => setShowMenu(true)} className="lg:hidden" />
                {/* Sidebar */}
                <div className={`${showMenu ? "translate-x-0" : "translate-x-full lg:translate-x-0"} transition-all fixed z-50 lg:flex-grow lg:justify-between lg:static lg:text-inherit lg:bg-transparent lg:flex gap-4 right-0 top-0 bottom-0 text-black bg-[#FB2E86] p-4`}>
                    <button>
                        <RxCross2 onClick={() => setShowMenu(false)} className="lg:hidden" />
                    </button>
                    <ul className="lg:flex gap-4">
                        <li><Link to="/" className={location.pathname === "/" ? "text-secondary" : ""}>Home</Link></li>
                        {reduxUser && reduxUser.role === "seller" && (
                            <li><Link to="/products/create" className={location.pathname === "/products/create" ? "text-secondary" : ""}>Create Products</Link></li>
                        )}
                        <li><Link to="/products" className={location.pathname === "/products" ? "text-secondary" : ""}>Products</Link></li>
                        {reduxUser && reduxUser.role === "buyer" && (
                            <li><Link to="/carts" className={location.pathname === "/carts" ? "text-secondary" : ""}>Carts <AiOutlineShoppingCart className="inline" />{totalCartItems}</Link></li>
                        )}

                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                    <form className="flex" onSubmit={(e) => {
                        e.preventDefault();
                        navigate("/products?search_term=" + e.target.search_term.value);
                    }}>
                        <input name="search_term" className="border border-pink-400" type="text" />
                        <button className="bg-[#FB2E86] p-1"><CiSearch /></button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Header;
