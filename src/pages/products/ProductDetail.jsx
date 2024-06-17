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
                <div className='flex mt-40 container'>
                    <img className='flex-none w-1/3 h-auto' src={product.image} alt={product.name} />
                    <div className='flex-grow ml-10'>
                        <table className='min-w-full border-collapse border border-gray-300'>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900">Product Name:</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{product.name}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900">Description:</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{product.description}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900">Price:</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">Rs{product.price}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900">In Stock:</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{product.in_stock ? 'Yes' : 'No'}</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900">Average Rating:</td>
                                    <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">{product.avg_rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}

        </>
    );
}

export default ProductDetail;
