<script setup>
import ServiceProviderProfile from '../components/ServiceProviderProfile.vue';
import Services from '../components/Services.vue';
import Reviews from '../components/Reviews.vue';
import Scheduling from '../components/Scheduling.vue';
import Payment from '../components/Payment.vue';
import Categories from '../components/Categories.vue';
import Filter from '../components/Filter.vue';
import Footer from '../components/Footer.vue';
import SearchBar from '../components/SearchBar.vue';
import SellerContent from '../components/SellerContent.vue';
import Suggested from '../components/Suggested.vue';


// const redirectToStripe = async () => {
// isLoading.value = true;

// const response = await fetch("/api/create-checkout-session", {
//   method: "POST",
// });
// const { url } = await response.json();

// window.location.href = url;
// };




</script>
<template >
  <!-- <SearchBar/>
  <Categories/>
  <Filter/>
  <SellerContent/>
  <Suggested/>
  <Footer/> -->
  <div >
    <v-breadcrumbs :items="['Home', 'Services', 'ServiceProvider']"></v-breadcrumbs>
    <ServiceProviderProfile />
        <Services />
        <Reviews/>
  </div>
      
      <div >
        <div id="scheduling"> 
        <Scheduling />
      </div>
            
      <div id="payment">
        <Payment />
      </div>
      </div>
          
       
        
        
          
        
        
          
       
        
     
           
      
        
             
           
            
       
    
      <!-- <v-row>
        <v-col>
        <ServiceProviderProfile/>
      </v-col>
      <v-col>
        <Scheduling/>
      </v-col>
      </v-row>
      <v-row>
        <v-col>
        <Services/>
      </v-col>
      <v-col>
        <Payment/>
      </v-col>
      </v-row>
      <Reviews/> -->
           
  </template>
 
  <style scoped>
  /* .service-provider-profile {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .profile {
    flex: 1;
  }
  
  .services,
  .reviews,
  .scheduling {
    flex: 1;
    margin-left: 20px; 
  }
   */
   .scheduling {
    /* Set a specific width and height for the embedded widget */
    width: 100%;
     /* Adjust this as needed */
    margin: 0 auto; /* Center align the widget horizontally */

    /* You can add more styling as needed to customize the appearance */
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
  }
  #payment{
    margin-left: 20pxz;
  }
   
   
  </style>
  
   