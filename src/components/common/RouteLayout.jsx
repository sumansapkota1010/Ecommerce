import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RouteLayout = () => {
    return (
        <>

            <Header />

            < Outlet />
            <ToastContainer />
        </>
    )
}

export default RouteLayout