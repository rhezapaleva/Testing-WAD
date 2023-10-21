document.addEventListener("DOMContentLoaded", function() {
    const bookingLink = document.getElementById("nav-link-bookings");
    const reviewsLink = document.getElementById("nav-link-reviews");
    const profileLink = document.getElementById("nav-link-profile");
    const content = document.getElementById("content");
    const reviewsArrow = document.getElementById("reviews-link");
  
    // Initially enlarge "My Bookings" link
    bookingLink.classList.add("active");
  
    bookingLink.addEventListener("click", function(event) {
      event.preventDefault();
      resetFontSizes();
      bookingLink.classList.add("active");
  
      // Update content for "My Bookings"
      content.innerHTML = `
        <div class="card text-center mb-3" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">You have not made any bookings</h5>
            <p class="card-text">Let's go look for one!</p>
            <a href="#" class="btn btn-primary">Search</a>
          </div>
        </div>
      `;
    });

    reviewsArrow.addEventListener("click", function(event) {
        event.preventDefault();
        reviewsLink.click(); // Trigger a click on the "Reviews" tab
      });

    reviewsLink.addEventListener("click", function(event) {
      event.preventDefault();
      resetFontSizes();
      reviewsLink.classList.add("active");
  
      // Update content for "Reviews"
      content.innerHTML = `
      <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" href="#">Reviews</a>
          </li>
        </ul>
      </div>
      
      <div class="card m-3" style="width: auto;">
        <div class="card-body text-start px-2 py-2">
            <h6 class="card-title">Jane Doe</h6>
            <p class="card-text">Great Customer! Not fussy and very responsive, would love to serve him again!</p>
        </div>
      </div>

        <div class="card m-3" style="width: auto;">
            <div class="card-body text-start px-2 py-2">
                <h6 class="card-title">Tom Jerry</h6>
                <p class="card-text">John is a great photographer! Very accomodating and patient</p>
            </div>
        </div>

    </div>
      `;
    });
  
    profileLink.addEventListener("click", function(event) {
      event.preventDefault();
      resetFontSizes();
      profileLink.classList.add("active");
  
      // Update content for "Edit Profile"
      content.innerHTML = `
      <form>
      <div class="card" style="width: auto;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" class="form-control" style="padding: 5px;" placeholder="Change your Display Name">
          </li>
          <li class="list-group-item">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" class="form-control" style="padding: 5px;" placeholder="Change your Username">
          </li>
          <li class="list-group-item">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" class="form-control" style="padding: 5px;" placeholder="Change your Email">
          </li>
        </ul>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Update</button>
    </form>
      `;
    });

  
    function resetFontSizes() {
      bookingLink.classList.remove("active");
      reviewsLink.classList.remove("active");
      profileLink.classList.remove("active");
    }
  });
  