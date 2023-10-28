<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <router-view/>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/service-provider">Service Provider</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <nav class="site-nav">
            
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
        
    </nav> -->
</template>
<script >
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
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
background: url('/bg.jpg') rgba(0,0,0,0.3);
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