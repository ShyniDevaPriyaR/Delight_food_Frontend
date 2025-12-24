import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

import "./Home.css"

const GetProduct = () => {
  const [ProductItems, setProductsItems] = useState([]);

  useEffect(() => {
    fetch(`https://delight-food-backend.onrender.com/get`)
      .then((res) => res.json())
      .then((data) =>
        setProductsItems(data))
  }, [])

  const DeleteItems = (id) => {
    fetch(`https://delight-food-backend.onrender.com/deleteone/${id}`, {
      method: "DELETE",
    })
      .then((data) => {
        toast.success('deleted successfully');
        setProductsItems((prevProductItems) => prevProductItems.filter((Items) => Items._id !== id))
      })
  }

  return (
    <div>
      <ToastContainer />

      <div className='card table2'>
        <div className='card-body'>
          <table className='table'>
            <div className='table1 '>
              <tr className='text-center tablefont '>
                <th >NAME</th>
                <th>IMAGE</th>
                <th>FEEDBACK</th>
                <th>PRICE</th>
                <th>RATING</th>
                <th>QUANTITY</th>
                <th>ACTIONS</th>
              </tr>
              {ProductItems?.map((Item) => (
                <tr key={Item._id}>
                  <td>{Item.name}</td>
                  <td><img src={Item.img} alt='' /></td>
                  <td>{Item.feedback}</td>
                  <td>{Item.price}</td>
                  <td>{Item.rating}</td>
                  <td>{Item.quantity}</td>
                  <td>
                    <button className='table3 btn-warning border-0 rounded-1 getprobtn' placeholder='delete' onClick={() => DeleteItems(Item._id)}>delete</button>
                    <Link to={`/edit/${Item._id}`}><button><FiEdit className='editicon' /></button></Link>
                  </td>
                </tr>
              ))}
            </div>
            {/* <div className='table2'>
        <button  placeholder='submit'>submit</button>
        </div> */}
          </table>
        </div>
      </div>

    </div>
  )
}

export default GetProduct