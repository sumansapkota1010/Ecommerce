
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



function App() {
  const [user, setUser] = useState("");


  useEffect(() => {

    let token = localStorage.getItem("access_token")
    if (token) {
      axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        setUser(res.data)
      })
    }

  }, [])



  useEffect(() => {
    document.title = "E-commerce";
  }, []);


  const router = createBrowserRouter([
    {
      path: "",
      element: <RouteLayout user={user} setUser={setUser} />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "carts",
          element: <Carts />
        },
        {
          path: "login",
          element: <Login setUser={setUser} />
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
