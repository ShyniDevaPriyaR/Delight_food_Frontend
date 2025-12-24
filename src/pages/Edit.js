import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const Edit = () => {

    const { id } = useParams();

    const [productsItems, setproductsItems] = useState({})

    useEffect(() => {

        fetch(`http://localhost:6002/getone/${id}`)
            .then((res) => res.json())
            .then((data) => setproductsItems(data))
    }, [])

    const handleUpdate = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const feedback = form.feedback.value;
        const price = form.price.value;
        const quantity = form.quantity.value;

        const update = { name, rating, price, img, feedback, quantity };

        console.log(update);

        fetch(`https://delight-food-backend.onrender.com/edit/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.warn("successfully updated");
                window.location.href = "/getproduct";
            })
    }

    return (
        <div>
            <ToastContainer />
            <div class="card update6">
                <div class="card-body update5">
                    <form onSubmit={handleUpdate}>
                        <h2 className='text-center uptitle'>EDIT</h2>

                        <div class="upload0 d-flex justify-content-center ">
                            <label className='ms-1 mt-2' ><b>Name</b></label>
                            <input type="text" name="name" className='ms-3 border-0 uploadinput upmar2  ' defaultValue={productsItems.name} />
                        </div>

                        <div class="upload1 d-flex justify-content-center  mt-2">
                            <label ><b>IMAGE</b></label>
                            <input type='img' name="img" className='ms-3 border-0 uploadinput upmar2' defaultValue={productsItems.img} />
                        </div>
                        <div class="upload2 d-flex justify-content-center mt-2">
                            <label ><b>Rating</b></label>
                            <input type='text' name="rating" className='ms-3 border-0 uploadinput upmar2' defaultValue={productsItems.rating} />
                        </div>
                        <div class="upload3 d-flex justify-content-center mt-2">
                            <label ><b>Feedback</b></label>
                            <input type='text' name='feedback' className='ms-3 border-0 uploadinput upmar2' defaultValue={productsItems.feedback} />
                        </div>
                        <div class="upload4 d-flex justify-content-center mt-2">
                            <label value="price"><b>PRICE</b></label>
                            <input type='numbers' name='price' className='ms-3 border-0 uploadinput upmar1' defaultValue={productsItems.price} />
                        </div>
                        <div class="upload4 d-flex justify-content-center mt-2">
                            <label value="price"><b>QUANTITY</b></label>
                            <input type='numbers' name='quantity' className='ms-3 border-0 uploadinput upmar3' defaultValue={productsItems.quantity} />
                        </div>

                        <section className='update9 mt-2'>

                            <div class="update7 ms-3 text-center">
                                <button type="submit" class="btn btn-primary ">UPDATE</button>

                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default Edit