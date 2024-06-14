import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${params.id}`)
            .then(res => {
                setProduct(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading product: {error.message}</p>;

    return (
        <>


            {product ? (
                <div className='primary-light mt-40  container text-center  object-contain'>
                    <div className=''>
                        <img className='mx-auto h-[50] w-[50] ' src={product.image} alt={product.name} />
                        <div className='mt-10'>
                            <h1>Product Name: {product.name}</h1>
                            <p>Product Description{product.description}</p>
                            <p>Price: Rs{product.price}</p>
                            <p>In Stock: {product.in_stock ? 'Yes' : 'No'}</p>
                            <p>Average Rating: {product.avg_rating}</p>
                        </div>
                    </div>

                </div>
            ) : (
                <p>Product not found</p>
            )}



        </>
    );
}

export default ProductDetail;
