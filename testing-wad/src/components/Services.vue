<template>
    <div class="services">
      <v-carousel>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

      <h2>About this gig</h2>
      <!-- <ul>
        <li v-for="service in services" :key="service.id">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
          <p>Price: ${{ service.price }}</p>
          <button @click="scheduleService(service)">Schedule</button>
        </li>
      </ul> -->
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Incidunt, repellat, consequuntur quam esse tempora error itaque atque excepturi quae nemo eligendi ipsa possimus vitae nisi enim cumque quibusdam. 
        Amet, cupiditate!
      </p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      services: {
        type: Array,
        required: true,
      },
    },
    methods: {
      scheduleService(service) {
        // Implement the logic to schedule the selected service here
        // You can use an event to notify the parent component about the selected service.
        this.$emit('schedule-service', service);
      },
    },
  };
  </script>
  
  <style scoped>
  .services {
    /* padding: 20px; */
    z-index: 100;
  }
  
  .services ul {
    list-style: none;
    padding: 0;
  }
  
  .services li {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .services button {
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  