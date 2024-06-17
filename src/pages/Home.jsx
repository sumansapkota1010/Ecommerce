import React, { useEffect, useState } from 'react'




import Header from '../components/common/Header';
import Banner from '../components/Banner';
import Product from '../components/common/Product';
import { ToTop } from '../components/common/ToTop';
import axios from 'axios';
import LatestProduct from '../components/common/LatestProduct';




const Home = () => {
    const [TrendingProducts, setTrendingProducts] = useState([])
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/trending").then(res => {

            setTrendingProducts(res.data.data)

        })
            .catch(err => {

            })

    }, [])


    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products").then(res => {
            console.log(res.data.products)
            setLatestProducts(res.data.products)


        })
            .catch(err => {


            })

    }, [])







    return (
        <>

            <Banner />
            <p className='text-5xl text-center font-bold text-primary-dark mt-10'>Trending Products</p>
            <div className='primary-light mt-10  container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    TrendingProducts.map((el) => {
                        return <Product product={el} />
                    }

                    )}
            </div>

            <div className='mt-32'>

                <p className='text-5xl text-center font-bold text-primary-dark'>Latest Products</p>
                <div className='primary-light mt-10  container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        LatestProducts.slice(0, 5).map((el) => {
                            return <LatestProduct products={el} />
                        }

                        )}
                </div>

            </div>

            <ToTop />



        </>
    )
}

export default Home