import React from 'react'
import "./Navbar.css"
import logo1 from "../images/DF_logo.png"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const Logout =()=> {
        localStorage.removeItem("token")
        window.location.href="/login"
    }
    return (
        <div>
           {props.data}
            <div class="container">
                <div class="row">
                   <div class="col d-flex justify-content-center gap-5">
                    <div class="mt-2">
                        <a class="nav-link" href="/"><img src={logo1}/></a>
                    </div>
                    <div class="mt-4" >
                        <nav class="navbar navbar-expand-lg navbar-light bg-white">
                            <div class="container-fluid">
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav ">
                                       
                                        <Link class="nav-link text-dark fw-bold " to="/sweets">SWEETS</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/snacks">SNACKS</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/pickle">PICKLE</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/masalas">MASALAS</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/mukhwas">MUKHWAS</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/rice">REGIONAL RICE</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/bakery">BAKERY</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/sharbats">SHARBATS</Link>
                                        <Link class="nav-link text-dark fw-bold" to="/carts">CARTS</Link>
                                         <Link class="nav-link text-dark fw-bold" to="/login">LOGIN</Link>
                                        <div class="login nav-link text-dark fw-bold" onClick={Logout}>LOG OUT</div>
                                       
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="d-flex gap-2 iconmar" >
                         <Link to="/register" className='iconcolr'><i class="fa-solid fa-circle-user fa-lg  "></i></Link> 
                          <Link to="#" className='iconcolr'><i class="fa-solid fa-magnifying-glass fa-lg"></i></Link> 
                         <Link to="#" className='iconcolr'> <i class="fa-solid fa-cart-shopping fa-lg "></i></Link> 
                          <Link to="/upload" className='iconcolr'><i class="fa-regular fa-address-book fa-lg"></i></Link>
                    </div>
                  </div>  
                </div>
            </div>



        </div>
    )
}

export default Navbar
