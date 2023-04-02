<template>
  <v-card>
    <v-card-title>Payment information</v-card-title>
    <v-divider />

    <v-container class="pa-4">
      <div class="mb-3">
        <span class="font-weight-medium">Price per kW/h:</span>
        2.54 kr
      </div>
      <div class="mb-3">
        <span class="font-weight-medium">Number of enabled chargers:</span>
        31
      </div>
      <div class="mb-3">
        <span class="font-weight-medium">Number of users:</span>
        23
      </div>
      <div class="d-flex justify-end">
        <v-btn color="primary">Edit</v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentInformation',
}
</script>
