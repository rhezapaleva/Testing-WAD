<template>

<nav class="navbar navbar-expand-lg bg-body-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="profilepicture.jpg" alt="" width="150" height="40"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mt-3" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="What service are you looking for?" aria-label="Search" style="width: 900px">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <li class="nav-item dropdown mx-8">
                <a class="nav-link dropdown-toggle mx-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Business solution
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Orders</a>
              </li>
              <span class="profile">T</span>
            </ul>
          </div>
        </div>
      </nav>



</template>
<script>
export default {
  name: 'SearchBar',
};
</script>
