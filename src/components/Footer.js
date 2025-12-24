import React from 'react'
import "../components/Footer.css"
import img1 from "../images/DF_logo_2.png"

const Footer = () => {
    return (
        <div>

            <footer class="foot2  ">
                <div class="container ">
                    <div class="row ">
                        <div class="col-lg-3  col-md-6 col-sm-6 mt-5">
                            <div class="footer-menu">
                                <img src={img1} alt="logo2" />
                                <div class=" mt-2">
                                    <p><strong> Delight Foods </strong> brings to you a collection of carefully selected foods from India. In our passionate search to offer food that is unique and full of flavor, we have ensured you get only the best and most authentic regional food products.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-2 col-sm-6 mt-5">
                            <div class="footer-menu">
                                <h5 class="widget-title ms-3">Quick Links</h5>
                                <ul class="menu-list list-unstyled maindetail1 " >
                                    <li class="menu-item"><a href="#" class="nav-link details2">About us</a></li>
                                    <li class="menu-item"><a href="#" class="nav-link details2">Contact</a>
                                    </li>
                                    <li class="menu-item"><a href="#" class="nav-link details2">Blogs</a>
                                    </li>
                                    <li class="menu-item"><a href="#" class="nav-link details2">Privacy Policy</a></li>
                                    <li class="menu-item"><a href="#" class="nav-link details2">Terms & Comditions</a>
                                    </li>
                                    <li class="menu-item"><a href="#" class="nav-link details2">Cancellation or Returns</a>
                                    </li>
                                    <li class="menu-item"><a href="#" class="nav-link details2" >Bulk order form</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 mt-5">
                            <div class="footer-menu">
                                <div>
                                    <h5 class="widget-title ms-3">Get in Touch</h5>
                                    <h5 class="ms-3">Customer Care:</h5>
                                    <p class="ms-3">+918861416154</p>
                                </div>
                                <div>
                                    <h5 class="ms-3">Email:</h5>
                                    <p class="ms-3">support@delightfoods.com</p>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 mt-5 ms-5">
                            <div class="footer-menu">
                                <h5 class="widget-title ms-3">Let's Connect</h5>
                                <ul class="d-flex gap-1 list-unstyled">
                                    <li><a href="#" class="btn  icon2 "><i class="fa-brands fa-facebook-f"
                                    ></i></a></li>
                                    <li><a href="#" class="btn icon2 "><i class="fa-brands fa-twitter"
                                    ></i></a></li>
                                    <li><a href="#" class="btn  icon2 "><i class="fa-brands fa-youtube"
                                    ></i></a></li>
                                    <li><a href="#" class="btn  icon2 "><i class="fa-brands fa-instagram"
                                    ></i></a></li>
                                    <li><a href="#" class="btn icon2 "><i class="fa-brands fa-amazon"
                                    ></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div class="footer-bottom footerbg">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col copyright">
                            <p class="footcpy" >&copy; 2025 Delights Foods. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
