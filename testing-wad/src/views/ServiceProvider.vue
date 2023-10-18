<template >
  <!-- <SearchBar/>
  <Categories/>
  <Filter/>
  <SellerContent/>
  <Suggested/>
  <Footer/> -->
  <v-container>
    <div class="serviceproviderprofile">
          <ServiceProviderProfile />
        </div>
        
        <div class="services">
          <Services />
        </div>
        <div class="reviews">
          <Reviews/>
        </div>
        
      </v-container>
           
      <v-container>
        <div class="scheduling">
              <Scheduling />
            </div>
            <div class="payment">
              <Payment />
            </div>
            
        </v-container>
    
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
  <script>
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

 
  
  
  export default {
    components: {
    ServiceProviderProfile,
    Services,
    Reviews,
    Scheduling,
    Payment,
    Categories,
    Filter,
    Footer,
    SearchBar,
    SellerContent,
    Suggested,
   
},
  };
  </script>
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
   .content{
            background-color: #005555;
            border: #005555 1px solid;
            border-radius: 20px;
            padding: 20px;
            color: white;
        }
        
        .categories,.suggested{
            font-size: 20px;
        }

        .numberOfService{
            top: 10px;

        }
        .box-feature {
        background: #fff;
        border-radius: 4px;
        padding: 30px;
        margin-bottom: 30px; 
      }
        .box-feature h3, .box-feature .h3 {
          font-size: 16px;
          margin: 0;
          padding: 0; 
        }
        .box-feature [class^="flaticon-"] {
          color: #00204a;
          font-size: 60px;
          margin: 0 0 10px 0;
          display: block;
          padding: 0;
          line-height: 0; 
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

        .profile{
          background-color: purple;
          border: 1px purple solid;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin: 5px;
          text-align: center;
          justify-content: end;
          align-items: flex-end;
          color: white;
          float: right;
          margin-left: 20px;
        }
   
  </style>
  
   