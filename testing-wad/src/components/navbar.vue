<template>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class=" navibar container-fluid">
            <a class="navbar-brand" href="#"><img src="C:\wamp64\www\WAD2\Testing-WAD\images\Logo.png" alt="Logo" style='height:40px'></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search for any service " aria-label="Search">
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                    <ul class="navbar-nav mb-2 mb-lg-0 d-flex ">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                            </a>
                            <ul id="dropdowncolor" class="dropdown-menu ">
                                <li><a class="dropdown-item text-light " href="#">Look for services</a></li>
                                <li><a class="dropdown-item text-light" href="#">Provide services</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">About</a>
                        </li>
                        
                        <li class="nav-item ">
                            <a class="nav-link text-light" href="http://localhost/WAD2/Testing-WAD/personalsettings.html">My Profile</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link text-light" href="http://localhost/WAD2/Testing-WAD/login-form-v5/Login_v5/login.html">Log In</a>
                        </li>

                        <li class="nav-item ">
                            <a class="nav-link text-light" href="http://localhost/WAD2/Testing-WAD/login-form-v5/Login_v5/signup.html">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>

</script>

<style> 
    /* styles.css */
/* Reset default body margin and padding */
body {
    margin: 0px;
    padding: 0px;
    background-color: white;
}

.btn{
    border-radius: 10px;
}

/*nav bar*/
.navibar,#dropdowncolor{
    background-color: #005555;
    
}

.navbar{
    padding: 0px;
    
}
.navbar-nav{
    margin-left: auto;
}

.form-control{
    width: 450px;
}

/*first carousel*/

#carouseltext {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* Customize text color */
    padding: 10px 20px; /* Customize padding */
    line-height: 1;
    font-size: 24px;
}

.firstcarousel{
    filter:brightness(50%);
    position: relative;
    .carousel-item{
        width: 100%; 
        height: 600px;
        padding: 0px;
    }
}

.populartext{
    margin-top: 500px;
}

.firstelement{
    position:relative;
}
/* #carouselExampleSlidesOnly {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
} */

.content {
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    position: absolute;
    z-index: 1
}


/* Cards */
.firstcard{
    margin: auto;
}
.card{
    border: none;
    border-radius: 0;
    box-shadow: 2px 6px 8px 0 rgba(22,22,26,0.18);
}

@media screen and (min-width: 568px){
.servicecards{
    display: flex;
}

.card{
    margin: 0 .5em;
    width: calc(100%/3);
}

.image-wrapper{
    height: 22vw;
    margin:0 auto ;
}
}

@media screen and (max-width: 567px){
    .card:not(:first-child){
        display:none;
    }
}

.image-wrapper img{
    max-width: 100%;
    max-height: 100%;
}

.carousel-control-prev,.carousel-control-next{
    background-color: #e1e1e1;
    width: 6vh;
    height: 6vh;
    border-radius: 50%;
    top:50%;
    transform: translateY(-50%);
}

/* features */
.features{
    background-color: rgb(187, 186, 186);
    display: flex;
}

.custom-card1{
    padding:auto;
    margin-top: 35px;
    width:auto;
}

/* Statistics */

/*Social*/

.social.list-inline {
    text-align: center; /* Center-align the icons */
    list-style: none; /* Remove list bullets */
    padding: 0;
    align-items: flex-end;
}

.social.list-inline li {
    display: inline-block;
    margin: 10px; 
    align-items: flex-end;
}
.social.list-inline a {
    text-decoration: none; /* Remove underlines from the icons */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; /* Make the icons circular */
    width: 40px; /* Adjust the width and height as needed */
    height: 40px;
    background-color: #007bff; /* Add a background color */
    color: #fff; /* Icon color */
}

.person-contents h2{
    text-align: center;
    text-decoration: none;
}
.person-contents p{
    background-color: bisque;
}

/* footer */
.site-footer {
    color: #ffffff; 
    background-color: #005555;
}
.site-footer a {
    color: white; 
    text-decoration: none; 
}

.site-footer {
    background: #efefef;
    font-size: 14px;
    color: #888;
    padding: 70px 0; }
    .site-footer a {
      color: #777;
      position: relative;
      display: inline-block;
      text-decoration: underline; }
      .site-footer a:hover {
        color: #000;
        text-decoration: none; }
        .site-footer a:hover:before {
          background: #00204a; }
    .site-footer .footer-cta h2, .site-footer .footer-cta .h2 {
      font-size: 30px;
      color: #00204a; }
    .site-footer .btn:before {
      display: none; }
    .site-footer .widget {
      margin-bottom: 40px;
      display: block; }
      .site-footer .widget h3, .site-footer .widget .h3 {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 15px;
        color: #00204a; }
      .site-footer .widget .links {
        width: 150px; }
        .site-footer .widget .links li {
          margin-bottom: 10px; }
    .site-footer .social li {
      display: inline-block; }
      .site-footer .social li a {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: relative;
        background: #ccc;
        border-radius: 40%; }
        .site-footer .social li a:before {
          display: none; }
        .site-footer .social li a > span {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%); }
        .site-footer .social li a:hover {
          background: #00204a;
          color: #fff; }
  
        .nav-link.active, .navbar-brand {
          font-size: 1.2rem; /* Increase the font size */
          transition: font-size 0.2s; /* Add a smooth transition effect */
        }
        
        .rating {
          cursor: pointer;
        }
  
        .rating:hover {
          background-color: lightgray;
        }

        .custom-navbar {
            justify-content: flex-start !important;
        }

        .hero {
            background-image: url('images/hero_bg_1.jpg');
            background-size: cover;
        }

</style>