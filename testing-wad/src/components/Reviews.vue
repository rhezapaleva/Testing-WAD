<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- Write a Review Section -->
        <h2>Write a Review</h2>
        <v-textarea v-model="newReview" label="Write your review" rows="4"></v-textarea>
        <v-btn @click="addReview" color="primary">Submit</v-btn>
      </v-col>
      
      <v-col cols="6">
        <!-- Existing Reviews Section -->
        <h2 class="existing-reviews-header">Reviews</h2>
        <v-card class="existing-reviews-card" v-for="(review, index) in reviews" :key="index">
          <v-card-title>
            {{ review.author }}
            <v-rating :value="review.rating" half-increments readonly dense></v-rating>
          </v-card-title>
          <v-card-text>
            <div class="review-date">{{ review.date }}</div>
            <div class="review-text">{{ review.text }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newReview: '',
      newRating: 0,
      reviews: [
        {
          author: 'User 1',
          date: 'January 1, 2023',
          text: 'This is the first review. Lorem ipsum dolor sit amet.',
          rating: 4,
        },
        {
          author: 'User 2',
          date: 'January 2, 2023',
          text: 'Another review goes here. Sed ut perspiciatis unde omnis.',
          rating: 5,
        },
        // You can add more hardcoded reviews as needed
      ],
    };
  },
  methods: {
    addReview() {
      if (this.newReview.trim() !== '' && this.newRating > 0) {
        this.reviews.unshift({
          author: 'Hardcoded User',
          date: new Date().toLocaleDateString(),
          text: this.newReview,
          rating: this.newRating,
        });
        this.newReview = '';
        this.newRating = 0;
      }
    },
  },
};
</script>

<style scoped>
.existing-reviews-header {
  font-size: 20px;
  margin-bottom: 10px;
}

.review-date {
  font-style: italic;
  color: #777;
}

.review-text {
  margin-top: 10px;
}

.existing-reviews-card {
  margin-bottom: 20px;
}
</style>