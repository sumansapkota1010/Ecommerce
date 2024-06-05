import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Product = ({ product }) => {



    return (
        <>



            {

                <Link to={`/products/${product._id}`} className='text-center group shadow hover:shadow-xl transition-all relative'>

                    <div className='bg-primary-light '>
                        <img className='mx-auto   w-full aspect-square object-cover' src={product.image} alt="" />
                    </div>

                    <div className='p-4  group-hover:bg-primary'>

                        <p className='text-secondary  group-hover:text-white '>
                            {product.name}
                        </p>
                        <div className='text-primary group-hover:text-white'>

                            <p>{product.price}</p>
                        </div>
                        <span className=' hidden absolute top-0 left-2 bg-[#EEEFFB]  p-2  group-hover:inline-block rounded-[50%]  '>

                            <AiOutlineShoppingCart className=' text-[#2F1AC4] ' />
                        </span>
                    </div>

                </Link>

            }




        </>
    )
}

export default Product