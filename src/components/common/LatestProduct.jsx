import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import { addToReduxCart } from "../../redux/slice/cartSlice";

const LatestProduct = ({ products }) => {
  const reduxUser = useSelector((reduxStore) => {
    return reduxStore.user.value;
  });
  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the Link
    e.preventDefault();

    toast.dismiss();
    if (reduxUser) {
      if (reduxUser?.role == "buyer") {
        dispatch(addToReduxCart(products));
        toast("Added to Cart");
      } else {
        toast.error("Forbidden! Only for buyer");
      }
    } else {
      toast.error("Login required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <Link
        to={`/products/${products._id}`}
        className="text-center group p-2 shadow hover:shadow-xl transition-all relative"
      >
        <div className="bg-primary-light transition-transform duration-300 group-hover:scale-105">
          <img
            className="mx-auto w-full aspect-square object-cover"
            src={products.image}
            alt=""
          />
        </div>

        <div className="p-4 transition-transform duration-300 group-hover:scale-105">
          <p className="text-secondary transition-colors duration-300 group-hover:text-black">
            {products.name}
          </p>
          <div className="text-primary transition-colors duration-300 group-hover:text-black">
            <p>{products.price}</p>
          </div>
          <span className="hidden absolute top-0 left-2 bg-[#EEEFFB] p-2 group-hover:inline-block rounded-[50%] transition-all duration-300">
            <AiOutlineShoppingCart
              onClick={addToCart}
              className=" text-[#2F1AC4] "
            />
          </span>
        </div>
      </Link>
    </>
  );
};

export default LatestProduct;
