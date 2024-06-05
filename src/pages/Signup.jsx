import axios from "axios";
import React from "react";

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/signup", {})
      .then((res) => { })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log("show server  error");
        } else if (err.response.status === 404) {
          console.log("show error");
        } else if (err.response.status === 404) {
          console.log("show error");
        }
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
            placeholder="name@flowbite.com"
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
