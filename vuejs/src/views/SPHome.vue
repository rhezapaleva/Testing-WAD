<template>
    <div class="spnavbar">
            <spnavbar />
    </div>
    <div class="container-fluid" style="background-color:#194759 ;border-radius: 5px;padding-bottom:10px; padding-top:25px;">
        <div class="row">
            <div class="col-md-4 col-12">
                <div class="container-fluid">
                    <!-- profile display take from waihong -->
                    <div class="row mb-5"> 
                      <div class="col-12">
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 60px;width:60px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                          <h5 class="card-title" style="text-align: center;color:#194759;">Jason Tourney</h5>
                          <p class="card-text" style="text-align: center;color: #7EBFB3;">
                            Customer is #1 Priority!
                          </p>
                            <p style="text-align: center;">
                            5.0 <small class="text-muted">(9 Reviews)</small>
                          </p>
                          <hr>
                          <p class="card-text">
                            <img src="../../public/location_marker.png" style="height:20px ;width:20px;"> From : Spain<br><br>
                            <img src="../../public/user.png" style="height:20px ;width:20px;"> Member Since : May 2023<br><br>
                            <img src="../../public/clock.png" style="height:20px ;width:20px;"> Avg. Response Time : 2 Hrs.<br><br>
                            <img src="../../public/acquisition.png" style="height:20px ;width:20px;"> Recent Sale(s) : 1 Day Ago</p>                              
                            </div>
                          </div>
    
                    </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-12">
                            <div class="card overflow-auto">
                                <div class="card-body">
                                  <h5 class="card-title">Successfully Completed Courses</h5>
                                  <br>
                                  <p class="card-text" style="font-weight: bold;"><img src="../../public/pen.png" style="height:30px ;width:30px;"> Craft Your Own Logo by Hand : DD/MM/YY</p><br>
                                  <p class="card-text" style="font-weight: bold;"><img src="../../public/photoshop.png" style="height:30px ;width:30px;"> Adobe Photoshop Mastery : DD/MM/YY</p><br>
                                  <p class="card-text" style="font-weight: bold;"><img src="../../public/google-analytics.png" style="height:30px ;width:30px;"> Google Analytics - Beginner : DD/MM/YY</p><br>
                                  
                                </div>
                              </div>
        
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-1">

            </div>
            <div class="col-md-7 col-12">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-12">
                            <p style="font-weight: bold;border: 1px solid rgb(205, 200, 200); border-radius:5px ; padding: 5px;color:white;">this_guy's products/gigs</p>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-md-4 col-12 mb-4">
                            <div class="card">
                                <img src="../../public/img_1.jpg" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">Product 1</h5>
                                  <p class="card-text">A modern house.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">$450,000</li>
                                </ul>
                              </div>
                        </div>
                        <div class="col-md-4 col-12 mb-4">
                            <div class="card">
                                <img src="../../public/img_2.jpg" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">Product 2</h5>
                                  <p class="card-text">A luxury estate.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">$700,000</li>
                                </ul>
                              </div>
                        </div>
                        <div class="col-md-4 col-12 mb-4">
                            <div class="card" >
                                <img src="../../public/img_3.jpg" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">Product 3</h5>
                                  <!-- pull from what user input the card text to be -->
                                  <p class="card-text">Estate by the beach.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">$900,000</li>
                                </ul>
                              </div>
                        </div>

                        <div class="col-md-4 col-12 mb-4">
                            <div class="card" >
                                <img src="../../public/img_4.jpg" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">Product 4</h5>
                                  <!-- pull from what user input the card text to be -->
                                  <p class="card-text">Estate by the beach.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">$600,000</li>
                                </ul>
                              </div>
                        </div>

                        <div class="col-md-4 col-12 mb-4">
                            <div class="card" >
                                <img src="../../public/img_5.jpg" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">Product 5</h5>
                                  <!-- pull from what user input the card text to be -->
                                  <p class="card-text">Estate by the beach.</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">$1,000,000</li>
                                </ul>
                              </div>
                        </div>  
                    </div>
                    <div class="row mb-2">
                      <h2 style="color: white;">Customer Reviews</h2>
                      <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active" data-bs-interval="10000">
                           <div class="card-group">
                            <div class="card">
                              <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                             <div class="card-body">
                             <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                             <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                             <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                             <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                      
                          </div>
                          <div class="carousel-item">
                      <div class="card-group">
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                      
                          </div>
                          <div class="carousel-item">
                        
                      
                      <div class="card-group">
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                        <div class="card">
                          <img src="../../public/person_1-min.jpg" class="card-img-top" style="height: 50px;width:50px; border-radius:25px;margin:auto; margin-top:20px">
                          <div class="card-body">
                            <h5 class="card-title" style="text-align: center;">Jason Tourney</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi libero suscipit non pariatur odio corrupti iusto id sapiente nostrum rerum? Autem error ullam ipsum impedit soluta voluptatem earum reprehenderit deserunt!</p>
                            <p class="card-text"><small class="text-muted">5.0/5.0 Last updated 3 mins ago</small></p>
                          </div>
                        </div>
                      </div>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
            
            
    
    
</template>
    
<script>
    
    import spnavbar from "../components/spnavbar.vue";
      
      export default {
        components: {
        spnavbar,
    },
      };
    
</script>
    
<style>
    
</style>