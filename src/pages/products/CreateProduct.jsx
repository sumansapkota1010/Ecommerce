import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const CreateProduct = () => {


    const [error, setError] = useState({})


    const initialState = {
        name: "",
        price: "",
        description: "",
        categories: [],
        images: []
    }

    const [data, setData] = useState(initialState)
    console.log(data)

    const handleSubmit = (e) => {
        setError({})

        e.preventDefault()

        let formData = new FormData()
        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("description", data.description)
        data.categories.forEach((cat) => {
            formData.append("categories[]", cat)
        })

        let files = [...data.images]
        files.forEach((img) => {

            formData.append("image", img)
        })





        axios.post("https://ecommerce-sagartmg2.vercel.app/api/products", formData,


            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            }).then((res) => {
                toast.success("Product Created")
                setData(initialState)

            }).catch(err => {
                if (err.response.status === 400) {
                    let errors = err.response.data.errors
                    let temp = {}

                    errors.forEach(validationError => {
                        temp[validationError.param] = validationError.msg
                    })
                    setError(temp)
                    toast.error("Bad Request. Check All form Data")

                } else {
                    toast.error("someting went wrong..")

                }


            })
    }

    const addCategory = () => {
        let temp = [...data.categories]
        temp.push("")
        setData({ ...data, categories: temp })

    }


    return (
        <>
            <div class="container mt-8">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div class="mb-4">
                        <label class="form-label" for="name">
                            Name
                        </label>
                        <input onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                            setError({ ...error, name: "" })


                        }}
                            className="form-control"
                            name='name'
                            value={data.name}
                            type="text" placeholder="" />
                        <small className='text-red-400'>{error.name}</small>
                    </div>
                    <div className="mb-4">
                        <label className="form-label" for="name">
                            Price
                        </label>
                        <input
                            onChange={(e) => {
                                setData({ ...data, price: e.target.value })
                                setError({ ...error, price: "" })
                            }}
                            name='price'
                            value={data.price}
                            className="form-control"
                            type="number" placeholder="" />
                        <small className='text-red-400'>{error.price}</small>
                    </div>

                    <div className="mb-4">
                        <label className="form-label" for="name">
                            Description
                        </label>
                        <textarea onChange={(e) => {
                            setData({ ...data, description: e.target.value })
                        }}
                            rows={6}
                            name='description'
                            value={data.description}
                            className="form-control" type="text"
                            placeholder="" />
                    </div>
                    <div className="mb-4">
                        <label className="form-label" for="name">
                            Category <button onClick={addCategory}
                                type='button'
                                className='btn'>Add Category</button>
                        </label>

                        {
                            data.categories.map((cat, index) => {
                                return <div className='flex p-2'>

                                    <input
                                        onChange={(e) => {
                                            let temp = [...data.categories]
                                            temp[index] = e.target.value
                                            setData({ ...data, categories: temp })
                                        }}

                                        name='category'
                                        value={cat}
                                        className="form-control" type="text"
                                        placeholder="" />

                                    <button onClick={() => {
                                        let temp = [...data.categories]
                                        temp.splice(index, 1)
                                        setData({ ...data, categories: temp })
                                    }}
                                        type='button'
                                        className='btn bg-red-300'>
                                        Delete Category</button>

                                </div>


                            })
                        }

                    </div>

                    <div className="mb-4">
                        <label className="form-label" for="name">
                            Images
                        </label>

                        <input

                            name='images'
                            className="form-control"
                            type="file"
                            multiple
                            onChange={(e) => {
                                setData({ ...data, images: e.target.files })

                            }}
                            placeholder="" />
                    </div>





                    <div className="flex items-center justify-between">
                        <button className="btn" type="submit">
                            Submit
                        </button>

                    </div>
                </form>

            </div>


        </>
    )
}

export default CreateProduct