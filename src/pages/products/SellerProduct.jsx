import axios from "axios";
import { useEffect, useState } from "react";

export default function SellerProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let access_token = localStorage.getItem("access_token");

        axios
            .get(`https://ecommerce-sagartmg2.vercel.app/api/products?sellerproducts`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            })
            .then((res) => {
                setProducts(res.data.products);
            });
    }, []);

    const handleDelete = (productId) => {

        axios.delete(`https://ecommerce-sagartmg2.vercel.app/api/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => {

                setProducts(products.filter((product) => product._id !== productId));
            })
            .catch((error) => {

                console.error("Error deleting the product:", error);
            });
    };

    return (
        <div className="container">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border-2 px-4 py-2">Name</th>
                        <th className="border-2 px-4 py-2">Price</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return (
                            <tr key={product._id}>
                                <td className="border-2 px-4 py-2">{product.name}</td>
                                <td className="border-2 px-4 py-2">{product.price}</td>

                                <td className="border-2 px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(product._id)}
                                        className="text-white bg-red-500 hover:bg-red-700 rounded px-4 py-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
