import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ setUser }) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        setIsSubmitting(true);

        let data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        axios
            .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", data)
            .then((res) => {
                console.log("re direct...");
                navigate("/");
                console.log(res.data.user)
                setUser(res.data.user)

                localStorage.setItem("access_token", res.data.access_token)

                toast.success("Login Successfull Successfully", {
                    theme: "colored",
                });

                setIsSubmitting(false);

            })
            .catch((err) => {
                let msg = "";
                if (err.response?.status === 500) {
                    msg = "Server error";
                    console.log("show server error");
                } else if (err.response?.status === 400) {
                    msg = "Bad request";
                    console.log("show error");
                } else if (err.response?.status === 401) {
                    msg = "Invalid Credentials";
                    console.log("show error");
                } else {
                    msg = "Something went wrong";
                }
                toast.error(msg, {
                    theme: "colored",
                });
                setIsSubmitting(false);
            });
    }

    return (
        <div className="mt-[70px] md:mt-[87px] lg:mt-[109px] xl:mt-[136px] 2xl:mt-[170px]">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="email" className="form-label required-field">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder=""
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="form-label required-field">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        required
                    />
                </div>

                <button
                    disabled={isSubmitting}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {isSubmitting ? "Loading..." : "Login"}

                </button>
                <Link to={"/Signup"} className="ml-4 text-blue-400 bg-transparent border-none cursor-pointer"> <p className='text-red-400'>Haven't Signup yet? Please Sign Up</p>Sign Up</Link>
            </form>
        </div>
    );
}
