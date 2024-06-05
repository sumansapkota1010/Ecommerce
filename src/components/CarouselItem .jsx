import React from 'react'

import { Link } from 'react-router-dom'

const CarouselItem = ({ banner }) => {
    return (
        <div className={`${banner} h-[50vh] xl:h-[80vh] bg-cover bg-center text-left flex justify-start items-center`}>
            <div className='container'>
                <div className='w-3/2 mt-'>


                    <p className='text-secondary mb-2'>Best Furniture For Your Castle</p>
                    <p className='text-5xl mb-3 font-bold'>New Furniture Collection
                        Trends in 2024</p>
                    <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                        in phasellus non in justo.</p>

                    <Link to={"/products"} className='bg-secondary inline-block mt-7 px-4 py-2'>Shop Now</Link>

                </div>

            </div>


        </div>
    )
}

export default CarouselItem 