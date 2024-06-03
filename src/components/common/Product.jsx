import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {



    return (
        <>



            {

                <Link to={`/products/${product._id}`} className='text-center group shadow hover:shadow-xl transition-all'>
                    <span>cart icon </span>
                    <div className='bg-primary-light'>
                        <img className='mx-auto h-[150] w-full object-contain' src={product.image} alt="" />
                    </div>

                    <div className='p-4  group-hover:bg-primary'>

                        <p className='text-secondary  group-hover:text-white '>
                            {product.name}
                        </p>
                        <div className='text-primary group-hover:text-white'>

                            <p>{product.price}</p>
                        </div>
                    </div>

                </Link>

            }




        </>
    )
}

export default Product