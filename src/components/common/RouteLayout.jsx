import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RouteLayout = ({ user, setUser }) => {
    return (
        <>

            <Header user={user} setUser={setUser} />

            < Outlet />
            <ToastContainer />
        </>
    )
}

export default RouteLayout