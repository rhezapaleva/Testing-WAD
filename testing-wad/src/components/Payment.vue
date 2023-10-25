<script>

// }
export default {
  data() {
    return {
      showPaymentModal: false,
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
      tab: null,
    };
  },
  methods: {
    openPaymentModal() {
      this.showPaymentModal = true;
    },
    closePaymentModal() {
      this.showPaymentModal = false;
      // Optionally, reset the form fields here
      this.cardNumber = '';
      this.cardHolder = '';
      this.expiryDate = '';
      this.cvv = '';
    },
    processPayment() {
      // Add your payment processing logic here
      // You can send payment information to your server or process it as needed
      // After successful processing, you can close the modal
      this.closePaymentModal();
    },
     async redirectToStripe() {


const response = await fetch("/api/create-checkout-session", {
  method: "POST",
});
const { url } = await response.json();

window.location.href = url;
}

  },
};
</script>
<template>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color= '#4ABDAC'
    >
      <v-tab value="one">Basic</v-tab>
      <v-tab value="two">Standard</v-tab>
      <v-tab value="three">Premium</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-btn @click="openPaymentModal" color="#FC4A1A" >Pay Now!</v-btn>
  </v-card>
  
  <v-dialog id="payment-element" v-model="showPaymentModal" max-width="500px">
    <v-card>
      <v-card-title>
        Payment Information
      </v-card-title>
      <v-card-text>
        <!-- Payment form fields (you can customize these) -->
        <v-text-field v-model="cardNumber" label="Card Number" outlined></v-text-field>
        <v-text-field v-model="cardHolder" label="Card Holder Name" outlined></v-text-field>
        <v-row>
          <v-col cols="6">
            <v-text-field v-model="expiryDate" label="Expiry Date" outlined></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="cvv" label="CVV" outlined></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click ="redirectToStripe" >Submit Payment</v-btn>
        <v-btn @click="closePaymentModal">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


