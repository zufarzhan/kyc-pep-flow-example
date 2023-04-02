<template>
  <v-container>
    <div class="text-h4 mb-10">Payment management for EV chargers</div>

    <v-row>
      <v-col cols="12">
        <kyc-banner />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="5">
        <payment-information class="mb-4" />
        <payment-information />
      </v-col>
      <v-col cols="12" sm="7">
        <payment-transactions />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
