<template>
<nav class="navbar navbar-expand-lg navbar-dark sticky-top-navbar">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand"><img src="/BookMeLogo-removebg-preview.png" alt="Logo" style="height: 40px"></a>
      <form class="d-none d-md-flex d-lg-flex" role="search">
        <!-- Search Form -->
        <input
          class="formsearch form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style="width: 300px"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Book Me</h5>
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
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link" href="#about">Services</a>
            </li>
          </ul>
          <!-- Login/Sign up -->
          <div
            class="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3"
          >
            <a href="#login" class="text-black text-decoration-none">Login</a>
            <a
              href="#signup"
              class="signupBut text-decoration-none px-3 py-1 rounded-1"
              style="white-space: nowrap"
              >Sign up</a
            >
          </div>
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

</style>