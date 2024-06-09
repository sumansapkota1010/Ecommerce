
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export default function Signup() {

  const navigate = useNavigate();


  function handleSubmit(e) {

    e.preventDefault();

    let data = {
      "name": e.target.name.value,
      "email": e.target.email.value,
      "password": e.target.password.value,
      "role": e.target.role.value,
    }

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup",
        data
      )
      .then((res) => {
        console.log("re direct...")
        navigate("/login")
        toast.success("SignUp Successfully", {
          theme: "colored"
        })



      })
      .catch((err) => {

        let msg = ""
        if (err.response?.status === 500) {
          msg = "Server error"
          console.log("show server  error");

        } else if (err.response?.status === 400) {
          msg = "Bad request"
          console.log("show error");
        } else {
          msg = "Something went wrong"
        }
        toast.error(msg, {
          theme: "colored"
        })

      });
  }

  return (

    <div className="mt-[70px] md:mt-[87px] lg:mt-[109px] xl:mt-[136px] 2xl:mt-[170px]">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="name" className="form-label required-field">
            Your Name
          </label>
          <input id="name" className="form-control" required />
        </div>
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
        <div className="mb-5">
          <label htmlFor="role" className="form-label required-field">
            Role
          </label>
          <select id="role" className="form-control">
            <option>select</option>
            <option>buyer</option>
            <option>seller</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

    </div>
  )
}
