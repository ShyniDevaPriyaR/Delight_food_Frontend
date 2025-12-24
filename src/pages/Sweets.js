import React from 'react'
import './Home.css'
import img1 from "../images/New_Sweet.jpg"
import sweetdata from '../constant/sweetdata'

import { useDispatch, useSelector } from 'react-redux';
import { addTocart,deleteFromCart} from "../redux/cartslice"

const Sweets = () => {

    const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch();


    const addCart = (item) => {
        dispatch(addTocart(item)) }


    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))}

    return (
        <div>
            <section id="sweets">
                <img src={img1} class="img-fluid" />
            </section>

            <section id="phase2">
                <div class="container mt-5">

                    <div class="row ">
                      {
                        sweetdata.map((item) => (
                        <div class="col" key={item.id}>
                            <div class="card border-0 carditem1 " >
                                <img src={item.img} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">{item.title}</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >{item.newprice}</p>
                                            <p><del class="noprice1" >{item.oldprice}</del></p>
                                        </div>
                                            {
                                                cartitems.find(Items => Items.id === item.id) ? (
                                                <button class="btn  addtocartbtn1" onClick={() => deleteCart(item)} > Remove From Cart </button>)
                                                :
                                                (<button class="btn  addtocartbtn1" onClick={() => addCart(item)} > Add To Cart </button>)
                                            }

                                        {/* <a href="#" class="btn addtocartbtn1">Add to Cart</a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))
                      }

                        
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Sweets
