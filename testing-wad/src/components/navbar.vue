<template>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="Untree.co">
	<link rel="shortcut icon" href="favicon.png">

	<meta name="description" content="" />
	<meta name="keywords" content="bootstrap, bootstrap5" />
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">


	<link rel="stylesheet" href="fonts/icomoon/style.css">
	<link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">

	<link rel="stylesheet" href="css/tiny-slider.css">
	<link rel="stylesheet" href="css/aos.css">
	<link rel="stylesheet" href="css/style.css">

    <nav class="site-nav">
            
                <div class="menu-bg-wrap">
                    <div class="site-navigation">
                        <a href="index.html" class="logo m-0 float-start">BookMe</a>

                        <ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="properties.html">Explore</a></li>
                            <li><a href="personalsettings.html">My Profile</a></li>
                            <li><a>Log In</a></li>
                            <li><a>Register</a></li>
                        </ul>

                        <a href="#" class="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                            <span></span>
                        </a>

                    </div>
                </div>
            
        </nav>
</template>

<script>

</script>

<style> 
.menu-bg-wrap {
  background-color: #005555;
  padding: 20px 30px;
  position: relative;
  float: left;
  width: 100%;
  overflow: hidden;
  border-radius: 7px;
  -webkit-box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.1); }

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto; }

@media (min-width: 576px) {
  .container, .container-sm {
    max-width: 540px; } }

@media (min-width: 768px) {
  .container, .container-sm, .container-md {
    max-width: 720px; } }

@media (min-width: 992px) {
  .container, .container-sm, .container-md, .container-lg {
    max-width: 960px; } }

@media (min-width: 1200px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1140px; } }

@media (min-width: 1400px) {
  .container, .container-sm, .container-md, .container-lg, .container-xl, .container-xxl {
    max-width: 1320px; } }

.site-nav {
  padding-top: 20px;
  padding-bottom: 20px;
  position: absolute;
  top: 0;
  z-index: 9;
  width: 100%; }
  .site-nav h1, .site-nav .h1 {
    margin: 0;
    padding: 0;
    font-size: 24px; }
  .site-nav .site-navigation .site-menu {
    margin-bottom: 0; }
    .site-nav .site-navigation .site-menu > li {
      display: inline-block; }
      .site-nav .site-navigation .site-menu > li > a {
        font-size: 14px;
        padding: 10px 15px;
        display: inline-block;
        text-decoration: none !important;
        color: rgba(255, 255, 255, 0.5); }
        .site-nav .site-navigation .site-menu > li > a:hover {
          color: #fff; }
      .site-nav .site-navigation .site-menu > li.cta-button a {
        padding: 6px 20px;
        border: 2px solid rgba(0, 0, 0, 0.1);
        color: #000;
        border-radius: 30px; }
        .site-nav .site-navigation .site-menu > li.cta-button a:hover {
          color: #000;
          background: #00204a;
          border-color: #00204a; }
      .site-nav .site-navigation .site-menu > li.active > a {
        color: #fff; }
    .site-nav .site-navigation .site-menu .has-children {
      position: relative; }
      .site-nav .site-navigation .site-menu .has-children > a {
        position: relative;
        padding-right: 20px; }
        .site-nav .site-navigation .site-menu .has-children > a:before {
          position: absolute;
          content: "\e313";
          font-size: 14px;
          top: 50%;
          right: 0;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          font-family: 'icomoon'; }
      .site-nav .site-navigation .site-menu .has-children .dropdown {
        visibility: hidden;
        opacity: 0;
        top: 100%;
        z-index: 999;
        position: absolute;
        text-align: left;
        -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
        padding: 20px 0;
        margin-top: 20px;
        margin-left: 0px;
        background: #fff;
        -webkit-transition: 0.2s 0s;
        -o-transition: 0.2s 0s;
        transition: 0.2s 0s; }
        .site-nav .site-navigation .site-menu .has-children .dropdown.arrow-top {
          position: absolute; }
          .site-nav .site-navigation .site-menu .has-children .dropdown.arrow-top:before {
            display: none;
            bottom: 100%;
            left: 20%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none; }
          .site-nav .site-navigation .site-menu .has-children .dropdown.arrow-top:before {
            display: none;
            border-color: rgba(136, 183, 213, 0);
            border-bottom-color: #fff;
            border-width: 10px;
            margin-left: -10px; }
        .site-nav .site-navigation .site-menu .has-children .dropdown a {
          font-size: 14px;
          text-transform: none;
          letter-spacing: normal;
          -webkit-transition: 0s all;
          -o-transition: 0s all;
          transition: 0s all;
          color: #000; }
        .site-nav .site-navigation .site-menu .has-children .dropdown .active a {
          color: #00204a !important; }
        .site-nav .site-navigation .site-menu .has-children .dropdown > li {
          list-style: none;
          padding: 0;
          margin: 0;
          min-width: 180px; }
          .site-nav .site-navigation .site-menu .has-children .dropdown > li > a {
            padding: 5px 20px;
            display: block; }
            .site-nav .site-navigation .site-menu .has-children .dropdown > li > a:hover {
              color: #00204a; }
          .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children > a:before {
            content: "\e315";
            right: 20px; }
          .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children > .dropdown, .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children > ul {
            left: 100%;
            top: 0; }
            .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children > .dropdown li a:hover, .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children > ul li a:hover {
              color: #00204a; }
          .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children:hover > a, .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children:active > a, .site-nav .site-navigation .site-menu .has-children .dropdown > li.has-children:focus > a {
            color: #00204a; }
      .site-nav .site-navigation .site-menu .has-children:hover > a, .site-nav .site-navigation .site-menu .has-children:focus > a, .site-nav .site-navigation .site-menu .has-children:active > a {
        color: #fff; }
      .site-nav .site-navigation .site-menu .has-children:hover, .site-nav .site-navigation .site-menu .has-children:focus, .site-nav .site-navigation .site-menu .has-children:active {
        cursor: pointer; }
        .site-nav .site-navigation .site-menu .has-children:hover > .dropdown, .site-nav .site-navigation .site-menu .has-children:focus > .dropdown, .site-nav .site-navigation .site-menu .has-children:active > .dropdown {
          -webkit-transition-delay: 0s;
          -o-transition-delay: 0s;
          transition-delay: 0s;
          margin-top: 0px;
          visibility: visible;
          opacity: 1; }
</style>