import React from 'react'
import ForbiddenImage from "../../assets/images/403.png"

const Forbidden = () => {
    return (
        <>

            <div className='container'>
                <img className='h-auto w-auto' src={ForbiddenImage} alt="" />
            </div>

        </>
    )
}

export default Forbidden