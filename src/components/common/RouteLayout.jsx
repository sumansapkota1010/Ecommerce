import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const RouteLayout = () => {
    return (
        <>

            <Header />
            
            < Outlet />

        </>
    )
}

export default RouteLayout