<template>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top-navbar">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand"><img src="/BookMeLogo-removebg-preview.png" alt="Logo" style="height: 40px"></a>
      <!-- Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon">
          <i class="fa fa-bars" aria-hidden="true" style="color: #1c1c1c"></i>
        </span>
      </button>
      <!-- Sidebar -->
      <div
        class="sidebar offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <!-- Sidebar Header -->
        <div class="offcanvas-header text-white border-white">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src="../../public/BookMeLogo.png" style="height: 40px;"></h5>
          <button
            type="button"
            class="btn-close btn-close-white shadow-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <!-- Sidebar Body -->
        <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
          <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
            <li class="nav-item mx-2">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#about">Dashboard</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#about">Learning Avenue</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#about">Permits/Requirements</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#about" style="color:green;margin-left:600px">Switch to Buying</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.js'

export default {
  name: 'navbar',
};
</script>

<style>

body{

background-blend-mode: multiply;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
margin: 0;
}

@media(max-width:991px){
.sidebar.offcanvas{
    background-color:rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
}
} 

.navbar{
margin-top: 20px;
}
.signupBut {
background-color: rgb(244, 241, 241);
border: 1px ;
border-color: green;
color: rgb(56, 56, 56);
}
.form-search.form-control {
width:300px
}

.maincontent{
background: url('images/bg.jpg') rgba(0,0,0,0.3);
}

.sticky-top-navbar {
position: sticky;
top: 0; /* Stick to the top of the viewport */
z-index: 100; /* Adjust the z-index as needed */
}

.navbar-dark .navbar-nav .nav-link {
color: black !important;
}

/* Target specifically the "Home" link */
.navbar-dark .navbar-nav .nav-item.active .nav-link {
color: black !important;
}


.navbar-toggler-icon {

border-color: black;
}

.navbar .text-white {
color: black; /* Change the text color to black */
}

</style>