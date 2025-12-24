import React from 'react'
import "./Home.css"
import img1 from "../images/order.jpg"
import img2 from "../images/hpb-4.webp"
import img3 from "../images/rice_banner_big_size.jpg"
import img4 from "../images/website_banner_-2.webp"
import img5 from "../images/Sweets.webp"
import img6 from "../images/Snacks.webp"
import img7 from "../images/Masala.webp"
import img8 from "../images/Mukhwas.webp"
import img9 from "../images/Rice.webp"
import img10 from "../images/Pickle.webp"
import img11 from "../images/Modak-Peeth.webp"
import icon1 from "../images/star-solid-full.svg"
import img12 from "../images/Bhakarwadi-300g-lifestyle.jpg"
import img13 from "../images/pulikachal_thokku.jpg"
import img14 from "../images/Tomato-Thokku-Mylapore.jpg"
import img15 from "../images/Bulk_Orders.jpg"
import img16 from "../images/Amla-turmeric-Kanji-250ml.jpg"
import img17 from "../images/Apple-vinegar-300ml.jpg"
import img18 from "../images/Jamun-vinegar-300ml.jpg"
import img19 from "../images/kimchi-1.jpg"
import Navbar from '../components/Navbar'



const Home = () => {

   

     

    return (
        <div>
                    {/* <Navbar data="Hi I am for testinh" /> */}

            <section id="phase1">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block w-100" alt="img" />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="img" />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block w-100" alt="img" />
                        </div>
                        <div class="carousel-item">
                            <img src={img4} class="d-block w-100" alt="img" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id="phase2">
                <div class="container">
                    <h2 class="text-center mt-5">CATEGORIES</h2>
                    <div class="row mt-5">
                        <div class="col d-flex justify-content-between flex-wrap">
                            <div class="card border-0 cardiconitem" >
                                <a href="#"><img src={img5} class="card-img-top" alt="icon" /></a>
                                <div class="card-body">
                                    <p class="card-text cardicontext">Sweets</p>
                                </div>
                            </div>
                            <div class="card border-0 cardiconitem" >
                                <a href="#"><img src={img6} class="card-img-top" alt="icon" /></a>
                                <div class="card-body">
                                    <p class="card-text cardicontext">Snacks</p>
                                </div>
                            </div>
                            <div class="card border-0 cardiconitem" >
                                <a href="#"><img src={img7} class="card-img-top" alt="icon" /></a>
                                <div class="card-body">
                                    <p class="card-text cardicontext">Masala</p>
                                </div>
                            </div>
                            <div class="card border-0 cardiconitem" >
                                <a href="#"><img src={img10} class="card-img-top" alt="icon" /></a>
                                <div class="card-body">
                                    <p class="card-text cardicontext">Pickle</p>
                                </div>
                            </div>
                            <div class="card border-0 cardiconitem" >
                                <a href="#"><img src={img8} class="card-img-top" alt="icon" /></a>
                                <div class="card-body">
                                    <p class="card-text cardicontext">Mukhwas</p>
                                </div>
                            </div>
                            <div class="card border-0 cardiconitem" >
                                <a href="#"><img src={img9} class="card-img-top" alt="icon" /></a>
                                <div class="card-body">
                                    <p class="card-text cardicontext">Rice</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="phase3">
                <div class="container mt-5">
                    <h2 class="text-center">MOST LOVED PRODUCTS</h2>
                    <div class="row">
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img11} class="card-img-top" alt="..." />
                                <div class="card-body carditembody1">
                                    <h5 class="card-title carditemtitle">Modak Peeth (Aromatic Rice Flour)</h5>
                                    <p class="card-text text-center">
                                        <a href="#" ><img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img></a>
                                        <span>1 review</span>
                                    </p>
                                    <div class="d-flex gap-2 justify-content-center">
                                        <p class="price1" >Rs.285.00</p>
                                        <p><del class="noprice1" >Rs.299.00</del></p>
                                    </div>
                                    <div class="text-center">
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img12} class="card-img-top" alt="..." />
                                <div class="card-body carditembody1">
                                    <h5 class="card-title text-center carditemtitle">Bhakarwadi 300g</h5>
                                    {/* <p class="card-text text-center"> 
                                           <a href="#" ><img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img></a>
                                            <span>1 Review</span>
                                        </p> */}
                                    <div class="d-flex gap-2 justify-content-center mt-5">
                                        <p class="price1" >Rs.299.00</p>
                                        <p><del class="noprice1" >Rs.349.00</del></p>
                                    </div>
                                    <div class="text-center mt-2">
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img13} class="card-img-top" alt="..." />
                                <div class="card-body carditembody1">
                                    <h5 class="card-title carditemtitle">Mylapore lyer's Pulikachal Thokku</h5>
                                    <p class="card-text text-center">
                                        <a href="#" ><img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img></a>
                                        <span>1 review</span>
                                    </p>
                                    <div class="d-flex gap-2 justify-content-center">
                                        <p class="price1" >Rs.449.00</p>
                                        <p><del class="noprice1" >Rs.450.00</del></p>
                                    </div>
                                    <div class="text-center">
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img14} class="card-img-top" alt="..." />
                                <div class="card-body carditembody1">
                                    <h5 class="card-title carditemtitle">Mylapore lyer's Pulikachal Thokku</h5>
                                    <p class="card-text text-center">
                                        <a href="#" ><img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img>
                                            <img src={icon1} class="cardstaricon1" ></img></a>
                                        <span>2 reviews</span>
                                    </p>
                                    <div class="d-flex gap-2 justify-content-center">
                                        <p class="price1" >Rs.419.00</p>
                                        <p><del class="noprice1" >Rs.450.00</del></p>
                                    </div>
                                    <div class="text-center">
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="phase4">
                <div class="container-fluid mt-5">
                    <a href="#" class="btn "><img src={img15} class="img-fluid ms-3 w-100"></img></a>
                </div>
            </section>

            <section id="phase5">
                <div class="container mt-5">
                    <h2 class="text-center">NEW ARRIVALS</h2>
                    <div class="row">
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img16} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">Amla Turmeric Kanji</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >Rs.98.00</p>
                                            <p><del class="noprice1" >Rs.99.00</del></p>
                                        </div>
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                           <div class="card border-0 carditem1 " >
                                <img src={img17} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">Amla Turmeric Kanji</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >Rs.98.00</p>
                                            <p><del class="noprice1" >Rs.99.00</del></p>
                                        </div>
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img18} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">Amla Turmeric Kanji</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >Rs.98.00</p>
                                            <p><del class="noprice1" >Rs.99.00</del></p>
                                        </div>
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 carditem1 " >
                                <img src={img19} class="card-img-top" alt="..." />
                                <div class="card-body carditembody2">
                                    <h5 class="card-title text-center carditemtitle">Amla Turmeric Kanji</h5>
                                    <p class="card-text text-center mt-4">
                                        <div class="d-flex gap-2 justify-content-center">
                                            <p class="price1" >Rs.198.00</p>
                                            <p><del class="noprice1" >Rs.199.00</del></p>
                                        </div>
                                        <a href="#" class="btn addtocartbtn1">Add to Cart</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Home
