import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart, updateQuantity} from '../redux/cartslice'


const Carts = () => {
    const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch()


    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }




    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    }


    const decrementCart = (id, quantity) => 
    {
        if (quantity > 1) 
        {
            dispatch(updateQuantity({ id, quantity: quantity - 1 }))
        }
    }

  return (
    <div>
      {/* <h1>WELCOME</h1> */}
      <div class="row "> 
       {
                        cartitems.map((item) => (
                        <div class="col " key={item.id}>
                            <div class="card border-0 carditem1 " >
                                <img src={item.img} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">{item.title}</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >{item.newprice}</p>
                                            <p><del class="noprice1" >{item.oldprice}</del></p>
                                        </div>
                                        <div className='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                            <button onClick={() => { decrementCart(item.id, item.quantity) }}>-</button>
                                            {item.quantity}
                                            <button onClick={() => { incrementCart(item.id, item.quantity) }} >+</button>
                                        </div>
                                        <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} style={{ backgroundColor: 'red' }}> Delete </button>


                                        {/* {
                                                Carts.find(Itemofcart => Itemofcart.id === item.id) ? (
                                                    <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} > Remove From Cart </button>)
                                                    :
                                                    (<button class="btn btn-danger cartbutton" onClick={() => addToCart(item)} > Add To Cart </button>)
                                            } */}

                                        {/* <a href="#" class="btn addtocartbtn1">Add to Cart</a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))
                      }

      </div>
      
    </div>
  )
}

export default Carts
