import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LatestProduct from '../../components/common/LatestProduct'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Pagination from 'rc-pagination';
import Noproduct from '../../assets/images/noproduct.jpg'

const Product = () => {


    const params = useLocation()



    const [paginationData, setPaginationData] = useState({
        total: 0,
        page: 1,
        per_page: 50
    })
    const [currentSearchParams, setSearchParams] = useSearchParams()
    console.log(params)

    const [products, setProducts] = useState([])

    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products" + params.search).then((res) => {
            console.log(res.data)
            console.log(res.data.metadata)
            setIsFetching(false)
            setProducts(res.data.products)
            setPaginationData(res.data.metadata) 


        })
    }, [params.search])



    const handlePerPageChange = (e) => {



        currentSearchParams.set("per_page", e.target.value)
        setSearchParams(currentSearchParams)

    };

    const handleSortChange = (e) => {

        currentSearchParams.set("sort", e.target.value)
        setSearchParams(currentSearchParams)

    };




    return (
        <>

            <>


                <section className=' container mt-16'>

                    <div className='mb-12 flex items-center justify-between '>
                        <div>

                            <p className='text-primary-dark text-3xl font-bold'>Ecommerce Accessories & Fashion Item</p>

                            <Pagination
                                total={paginationData.total}
                                pageSize={paginationData.per_page}
                                nextIcon=" <next>"
                                prevIcon="<prev>"
                                current={paginationData.current}
                                onChange={(pageNumber) => {
                                    currentSearchParams.set("page", pageNumber)
                                    setSearchParams(currentSearchParams)



                                }}
                                showTotal={(total, range) =>
                                    `${range[0]}-${range[1]} of ${total} items`

                                }
                            />


                        </div>
                        <div className='flex gap-2'>
                            <select name="" id="" onChange={handlePerPageChange}


                            >
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <select name="" id="" onChange={handleSortChange}

                            >
                                <option value="datedesc">Latest</option>
                                <option value="pricedesc">Highest Price</option>

                            </select>


                        </div>

                    </div>

                    <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4">

                        <div className='border'>
                            filter..
                        </div>
                        <div className='border lg:col-span-3  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 bg-primary-light'>

                            {
                                isFetching
                                &&
                                <>

                                    <Skeleton height={150} />
                                    <Skeleton height={150} />
                                    <Skeleton height={150} />
                                    <Skeleton height={150} />
                                    <Skeleton height={150} />
                                    <Skeleton height={150} />
                                    <Skeleton height={150} />
                                    <Skeleton height={150} />


                                </>
                            }
                            {
                                (!isFetching && products.length === 0)
                                &&

                                <img className="ml-auto mr-auto" src={Noproduct} alt="" />

                            }




                            {
                                products.map((el) => {
                                    return <LatestProduct products={el} />
                                })
                            }


                        </div>

                    </div>


                </section>


            </>

        </>
    )
}

export default Product