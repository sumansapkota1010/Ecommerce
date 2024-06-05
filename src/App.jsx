
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



function App() {
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
          element: <Carts />
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
