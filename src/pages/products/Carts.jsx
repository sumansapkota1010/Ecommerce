import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../redux/slice/cartSlice'


const Carts = () => {

  const cartItems = useSelector((reduxStore) => {
    return reduxStore.cart.cartItem
  })

  const dispatch = useDispatch();


  return (
    <>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Product
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Quantity
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Price
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item) => {
                      return <tr className="bg-gray-100 border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <span onClick={() => {
                            dispatch(decrement(item))
                          }} className='p-3 bg-secondary text-white'>-</span>    {item.quantity} <span onClick={() => {
                            dispatch(increment(item))
                          }} className='p-3 bg-secondary text-white'>+</span>
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.price * item.quantity}
                        </td>
                      </tr>

                    })
                  }



                </tbody>
              </table>
              <button className='btn mt-4'>Place Order</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Carts