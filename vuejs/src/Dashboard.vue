<script>
anychart.onDocumentReady(function () {  
									// add the data
									var data = anychart.data.set([
									["Referral", 1],
									["Direct", 2],
									["Organic Search", 7]
									]);
									// create a pie chart instance with the passed data
									var chart = anychart
									.pie(data)
									// set the inner radius to make a donut chart
									.innerRadius("55%");
									// set the container id for the chart
									chart.container("container");
									// draw the resulting chart
									chart.draw();
								});

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

</script>
<template>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="description" content="" />
	<meta name="keywords" content="bootstrap, bootstrap5" />


	<title>Hello this is wad</title>
</head>
<body>

		<div class="container-fluid" style="background-color:lightgray ;border-radius: 5px;">
			<div class="row mb-3 align-items-center">
				<div class="col-md-6 col-12">
					<h2 class="font-weight-bold text-primary heading mt-5">Your Executive Dashboard</h2>
				</div>
				<!-- <div class="col-lg-6 text-lg-end">
					<p><a href="#" target="_blank" class="btn btn-primary text-white py-3 px-4">View all properties</a></p>
				</div> -->
				</div>
				<div class="row mb-3">
					<div class="col-md-3 col-12 mx-3" data-aos="fade-up" data-aos-delay="300" style="height:80%;border: 2px solid white; border-radius:5px;background-color: white; ">
						<p><small class="text-muted">Auto date range</small><br><img src="images/calendar.png" style="width:20px ; height:20px;"> This Month</p>
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
							<div id="container"></div>

					</div>	
				</div>
				<div class="row mb-3">
					<div class="col-md-6 col-12 mx-3"  data-aos="fade-up" data-aos-delay="400" style="border: 2px solid white; border-radius:5px;background-color: white; ">
						<h3 class="mb-3">Business Progress</h3>
						<img src="images/success.png" style="height: 400px;width: 700px;">
					</div>
					<div class="col-md-5 col-12"  data-aos="fade-up" data-aos-delay="400" style="margin-left:40px;border: 2px solid white; border-radius:5px;background-color: white; ">
						<h3 class="mb-3">MRR</h3>
						<img src="images/MRRexample.png" style="height: 400px;width: 560px;">
					</div>
				</div>
			</div>








  </body>
  </html>



</template>