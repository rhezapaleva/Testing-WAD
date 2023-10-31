<template>
<div class="spnavbar">
		<spnavbar />
</div>


		
		<div class="container-fluid" style="background-color:#194759 ;border-radius: 5px;padding-bottom:10px;">
			<div class="row mb-3 align-items-center">
				<div class="col-md-6 col-12">
					<h2 class="font-weight-bold heading mt-5" style="color: white">Your Executive Dashboard</h2>
				</div>
				</div>
				<div class="row mb-3">
					<div class="col-md-3 col-12 mx-3" data-aos="fade-up" data-aos-delay="300" style="height:80%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Auto date range</small><br><img src="../../public/calendar.png" style="width:20px ; height:20px;"> This Month</p>
					</div>
					<div class="col-md-2 col-12 mx-3" data-aos="fade-up" data-aos-delay="300" style="height:90%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Products</small><br>All</p>
					</div>
					<div class="col-md-2 col-12 mx-3" data-aos="fade-up" data-aos-delay="300" style="height:90%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Posts</small><br>All</p>
					</div>
				</div>
				<div class="row mb-3">
					<div class="col-md-3 col-6 mx-3"  data-aos="fade-up" data-aos-delay="300" style="border: 2px solid white; border-radius:5px;background-color: white; ">
						<h3 class="mb-3">New Sales</h3>
						<div style="text-align: center;">
						<h1>230</h1>
						<h2 style="color:green; font-weight:200;">25%</h2>
						<p style="font-weight:100;">vs previous month</p>
						</div>
					</div>
					<div class="col-md-3 col-6 mx-2"  data-aos="fade-up" data-aos-delay="500" style="border: 2px solid white; border-radius:5px;background-color: white; ">
							<h3 class="mb-3">Business Growth Rate</h3>
							<div style="text-align: center;">
								<h1>17.23%</h1>
								<h2 style="color:green; font-weight:200;">25%</h2>
								<p style="font-weight:100;">vs previous month</p>
								</div>
					</div>
					<div class="col-md-3 col-6 mx-2"  data-aos="fade-up" data-aos-delay="400" style="border: 2px solid white; border-radius:5px;background-color: white; ">
							<h3 class="mb-3">MRR</h3>
							<div style="text-align: center;">
								<h1>$4,596</h1>
								<h2 style="color:green; font-weight:200;">7.8%</h2>
								<p style="font-weight:100;">vs previous month</p>
								</div>
					</div>
					<div class="col-md-2 col-6 mx-2"  data-aos="fade-up" data-aos-delay="600" style="border: 2px solid white; border-radius:5px;background-color: white; ">
							<h3 class="mb-3">Webpage Views</h3>
							<div id="container" style="text-align: center;margin-top:30px;">
								<img src="../../public/pie-chart.png" style="width:100px; height:100px;">
							</div>

					</div>	
				</div>
				<div class="row mb-3">
					<div class="col-md-6 col-12 mx-3"  data-aos="fade-up" data-aos-delay="400" style="border: 2px solid white; border-radius:5px;background-color: white; ">
						<div>
						<h3 class="mb-3">Business Progress</h3>
						<img src="../../public/success.png" style="height:300px;width: 90%; padding-bottom: 15px;">
						</div>
					</div>
					<div class="col-md-5 col-12"  data-aos="fade-up" data-aos-delay="400" style="margin-left:40px;border: 2px solid white; border-radius:5px;background-color: white; ">
						<div>
						<h3 class="mb-3">MRR</h3>
						<img src="../../public/MRRexample.png" style="height:90%;width: 100%;">
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