import React from 'react'
import "./Navbar.css"
import logo1 from "../images/DF_logo.png"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  const Logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }
  return (
    <div>
      {props.data}

      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo1} alt="logo" height="50" />
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navbar-collapse-dark d-none d-lg-flex">
            <div className="navbar-nav ms-auto gap-3">

              <Link className="nav-link nav-item-custom" to="/sweets">SWEETS</Link>
              <Link className="nav-link nav-item-custom" to="/snacks">SNACKS</Link>
              <Link className="nav-link nav-item-custom" to="/pickle">PICKLE</Link>
              <Link className="nav-link nav-item-custom" to="/masalas">MASALAS</Link>
              <Link className="nav-link nav-item-custom" to="/mukhwas">MUKHWAS</Link>
              <Link className="nav-link nav-item-custom" to="/rice">REGIONAL RICE</Link>
              <Link className="nav-link nav-item-custom" to="/bakery">BAKERY</Link>
              <Link className="nav-link nav-item-custom" to="/sharbats">SHARBATS</Link>
              <Link className="nav-link nav-item-custom" to="/carts">CARTS</Link>
              <Link className="nav-link nav-item-custom" to="/upload">FEEDBACK</Link>

              <Link className="nav-link btn-login" to="/login">LOGIN</Link>
              <span className="nav-link btn-logout" onClick={Logout}>LOG OUT</span>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">
              <div className="navbar-nav text-center">

                <Link className="nav-link nav-item-custom" to="/sweets">SWEETS</Link>
                <Link className="nav-link nav-item-custom" to="/snacks">SNACKS</Link>
                <Link className="nav-link nav-item-custom" to="/pickle">PICKLE</Link>
                <Link className="nav-link nav-item-custom" to="/masalas">MASALAS</Link>
                <Link className="nav-link nav-item-custom" to="/mukhwas">MUKHWAS</Link>
                <Link className="nav-link nav-item-custom" to="/rice">REGIONAL RICE</Link>
                <Link className="nav-link nav-item-custom" to="/bakery">BAKERY</Link>
                <Link className="nav-link nav-item-custom" to="/sharbats">SHARBATS</Link>
                <Link className="nav-link nav-item-custom" to="/carts">CARTS</Link>
                <Link className="nav-link nav-item-custom" to="/upload">FEEDBACK</Link>

                <Link className="nav-link btn-login my-2" to="/login">LOGIN</Link>
                <span className="nav-link btn-logout" onClick={Logout}>LOG OUT</span>

              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center gap-5">
            <div class="mt-2">
              <a class="nav-link" href="/"><img src={logo1} /></a>
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
                      <Link class="nav-link text-dark fw-bold" to="/upload">FEEDBACK</Link>
                      <Link class="nav-link text-dark fw-bold" to="/login">LOGIN</Link>
                      <div class="login nav-link text-dark fw-bold" onClick={Logout}>LOG OUT</div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar
