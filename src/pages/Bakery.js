import React from 'react'

import img1 from "../images/b.bakery_30d.jpg"

import bakerydata from '../constant/bakerydata'
const Bakery = () => {
    return (
        <div>
            <section id="bakery">
                <img src={img1} class="img-fluid" />
            </section>

            <section id="masala-phase1">
                <div class="container mt-5">

                    <div class="row ">
                        {
                            bakerydata.map((item) => (
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={item.img} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">{item.title}</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >{item.newprice}</p>
                                            <p><del class="noprice1" >{item.oldprice}</del></p>
                                        </div>
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
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

export default Bakery
