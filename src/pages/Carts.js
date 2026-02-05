import React from 'react'
import './Carts.css'

import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../redux/cartslice'


const Carts = () => {
    const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch()

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }

    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    }

    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }))
        }
    }

    return (
        // <div>
        //     {/* <h1>WELCOME</h1> */}
        //     <div class="row ">
        //         {
        //             cartitems.map((item) => (
        //                 <div class="col " key={item.id}>
        //                     <div class="card border-0 carditem1 " >
        //                         <img src={item.img} class="card-img-top" alt="..." />
        //                         <div class="card-body carditembody2">
        //                             <h5 class="card-title text-center carditemtitle">{item.title}</h5>
        //                             <p class="card-text text-center mt-4">
        //                                 <div class="d-flex gap-2 justify-content-center">
        //                                     <p class="price1" >{item.newprice}</p>
        //                                     <p><del class="noprice1" >{item.oldprice}</del></p>
        //                                 </div>
        //                                 <div className='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        //                                     <button onClick={() => { decrementCart(item.id, item.quantity) }}>-</button>
        //                                     {item.quantity}
        //                                     <button onClick={() => { incrementCart(item.id, item.quantity) }} >+</button>
        //                                 </div>
        //                                 <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} style={{ backgroundColor: 'red' }}> Delete </button>


        //                                 {/* {
        //                                         Carts.find(Itemofcart => Itemofcart.id === item.id) ? (
        //                                             <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} > Remove From Cart </button>)
        //                                             :
        //                                             (<button class="btn btn-danger cartbutton" onClick={() => addToCart(item)} > Add To Cart </button>)
        //                                     } */}

        //                                 {/* <a href="#" class="btn addtocartbtn1">Add to Cart</a> */}
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))
        //         }

        //     </div>
        // </div>



        <div className="container py-5">
            <h2 className="text-center mb-5 fw-bold" style={{ color: '#d63384' }}>Your Shopping Cart</h2>

            <div className="row mb-4">
                <div className="col-12 text-center">
                    <p className="lead text-muted fst-italic">
                        "Continue shopping to explore more delicious sweets, snacks, and traditional products."
                    </p>
                </div>
            </div>

            {cartitems.length > 0 ? (
                <div className="row g-4">
                    {cartitems.map((item) => (
                        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card border-0 shadow-sm h-100 carditem1" style={{ borderRadius: '15px' }}>
                                <img
                                    src={item.img}
                                    className="card-img-top img-fluid"
                                    alt={item.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column text-center">
                                    <h5 className="carditemtitle mb-2 text-dark fw-bold">{item.title}</h5>

                                    <div className="d-flex justify-content-center gap-2 mb-3">
                                        <span className="price1">{item.newprice}</span>
                                        <del className="noprice1 small text-muted">{item.oldprice}</del>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                                        <button
                                            className="qty-btn"
                                            onClick={() => decrementCart(item.id, item.quantity)}
                                        >
                                            &minus;
                                        </button>
                                        <span className="fw-bold fs-5">{item.quantity || 0}</span>
                                        <button
                                            className="qty-btn"
                                            onClick={() => incrementCart(item.id, item.quantity)}
                                        >
                                            &#43;
                                        </button>
                                    </div>

                                    <div className="mt-auto pt-3 border-top">
                                        <button
                                            className="btn btn-danger w-100 rounded-pill fw-bold"
                                            onClick={() => deleteCart(item)}
                                        >
                                            <i className="fa-solid fa-trash-can me-2"></i> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            ) : (
                <div className="text-center py-5">
                    <div className="mb-4 text-muted opacity-25">
                        <i className="fa-solid fa-cart-shopping" style={{ fontSize: '120px' }}></i>
                    </div>
                    <h3 className="text-muted mb-4">Your shopping cart is currently empty.</h3>
                    <p className="mb-5 text-secondary">Looking for something delicious? Check out our latest products!</p>
                    <button className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm" style={{ backgroundColor: '#d63384', border: 'none' }}>
                        Browse Products
                    </button>
                </div>
            )}
        </div>
    )

}

export default Carts
