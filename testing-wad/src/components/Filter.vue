<template>

<div>
        <h3 class="m-2">Result for <span class="fw-bold">Service Name</span></h3>
      </div>
      <div class="dropdown m-2">
        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item" type="button">Action</button></li>
          <li><button class="dropdown-item" type="button">Another action</button></li>
          <li><button class="dropdown-item" type="button">Something else here</button></li>
        </ul>

        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Logo options
        </button>
        <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>

        <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Seller details
        </button>
        <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>

          <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Budget
        </button>
        <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>

          <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Delivery time
        </button>
        <ul class="dropdown-menu">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul>
      </div>
      <div class="flex flex-items-center flex-wrap">
        <div class="numberOfService tbody-5 m-2">2000 services available</div>
      </div>
      <div class="d-flex dropdown justify-content-end">

<span class="d-flex justify-content-end m-3">Sort by:</span>
<button class="btn btn-success dropdown-toggle m-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Relevance
</button>
<ul class="dropdown-menu">
  <li><button class="dropdown-item" type="button">Action</button></li>
  <li><button class="dropdown-item" type="button">Another action</button></li>
  <li><button class="dropdown-item" type="button">Something else here</button></li>
</ul>
</div>
</template>

<script>
export default {
  name: 'Filter',
};
</script>