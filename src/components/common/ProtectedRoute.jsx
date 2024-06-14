import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Forbidden from './Forbidden'

const ProtectedRoute = ({ role }) => {

    let user = useSelector((reduxStore) => {
        return reduxStore.user.value
    })




    if (user) {
        if (user.role === role) {
            return <Outlet />
        } else {
            return <Forbidden />
        }

    }


}

export default ProtectedRoute