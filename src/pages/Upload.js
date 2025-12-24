import React from 'react'
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
// import { useEffect } from 'react';

const Upload = () => {


    const handleSubmit = (event) => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const feedback = form.feedback.value;
        const price = form.price.value;
        const quantity = 1;

        if (name === "" || img === "" || feedback === "" || rating === "" || price === "") {
            toast.warn('fill Required ');
        }
        else {
            const foods = { name, img, feedback, rating, price, quantity };
            // console.log(foods,"foods in object ");

            fetch('http://localhost:6002/uploaditem', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(foods),
            })
                // .then((res)=>res.json())
                .then((data) => {
                    toast.success('added successfully');
                    form.reset();
                    window.location.href = "/getproduct"
                }
                )

        }

    }

    return (
        <div>
            <ToastContainer />
            <div class="card border-0 upload6">
                <div class="card-body upload5">
                    <form onSubmit={handleSubmit} >
                        <h2 className='text-center uptitle'>CUSTOMER FEEDBACK</h2>
                        <div className='upload8 mt-4'>

                            <div class="upload0 d-flex justify-content-center ">
                                <label className='ms-1 mt-2' ><b>Name</b></label>
                                <input type="text" name="name" className=' border-0 uploadinput upmar2 ' />
                            </div>

                            <div class="d-flex justify-content-center upload1 mt-2">
                                <label ><b>Image</b></label>
                                <input type='img' name="img" className=' border-0 uploadinput upmar2 ' />
                            </div>

                            <div class="d-flex justify-content-center upload2 mt-2">
                                <label ><b>Rating</b></label>
                                <input type='text' name="rating" className=' border-0 uploadinput upmar2' />
                            </div>

                            <div class="d-flex justify-content-center upload3 mt-2">
                                <label ><b>Feedback</b></label>
                                <input type='text' name='feedback' className=' border-0 uploadinput upmar1' />
                            </div>
                            <div class="d-flex justify-content-center upload4 mt-2">
                                <label value="price"><b>Price</b></label>
                                <input type='numbers' name='price' className=' border-0 uploadinput upmar3' />
                            </div>

                            <div class="text-center upload7 mt-2">
                                <button type="submit" class="btn btn-danger">Upload</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )

}


export default Upload