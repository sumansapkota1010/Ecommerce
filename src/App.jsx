
import RouteLayout from "./components/common/RouteLayout";
import "./index.css";

import Home from "./pages/Home";



import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/products/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Carts from "./pages/products/Carts";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setReduxUser } from "./redux/slice/userSlice";
import CreateProduct from "./pages/products/CreateProduct";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { setReduxCart } from "./redux/slice/cartSlice";
import SellerProducts from "./pages/products/SellerProduct";




function App() {

  const dispatch = useDispatch();



  useEffect(() => {

    let token = localStorage.getItem("access_token")
    if (token) {
      axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        dispatch(setReduxUser(res.data))
      })
    }

    let cartData = JSON.parse(localStorage.getItem("cartItems"));

    if (cartData) {
      dispatch(setReduxCart(cartData));
    } else {
    }

  }, [])



  useEffect(() => {
    document.title = "E-commerce";
  }, []);


  const router = createBrowserRouter([
    {
      path: "",
      element: <RouteLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "carts",
          element: <ProtectedRoute role="buyer" />,
          children: [
            {
              path: "",
              element: <Carts />
            }
          ]




        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <Signup />
        },
        {
          path: "products",
          children: [
            {
              path: "",
              element: <Products />
            },
            {
              path: ":id",
              element: <ProductDetail />
            },
            {
              path: "create",
              element: <ProtectedRoute role="seller" />,
              children: [
                {
                  path: "",
                  element: <CreateProduct />
                }
              ]
            },
            {
              path: "seller",
              element: <ProtectedRoute role="seller" />,
              children: [
                {
                  path: "",
                  element: <SellerProducts />
                }
              ]
            }

          ]

        },


      ]
    },

  ]);

  return (
    <>

      <RouterProvider router={router} />




    </>
  );
}

export default App;
