import React, { useEffect, useState } from 'react'




import Header from '../components/common/Header';
import Banner from '../components/Banner';
import Product from '../components/common/Product';
import { ToTop } from '../components/common/ToTop';
import axios from 'axios';



const Home = () => {
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/trending").then(res => {
            console.log(res.data.data)
            setLatestProducts(res.data.data)

        })
            .catch(err => {

            })

    }, [])





    return (
        <>
          
            <Banner />
            <div className='primary-light mt-10  container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    latestProducts.map((el) => {
                        return <Product product={el} />
                    }

                    )}
            </div>


            <ToTop />



        </>
    )
}

export default Home