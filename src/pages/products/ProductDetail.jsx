import axios from 'axios';
import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams();

    useEffect(() => {

        axios.get("https://ecommerce-sagartmg2.vercel.app/api/products/64549d085e021d67be48e82a").then(res => {
            console.log(params.id)
            
        }).catch(err => {
            console.log(err)
        }
        )


    }, [])

    return (
        <>




        </>
    )
}

export default ProductDetail