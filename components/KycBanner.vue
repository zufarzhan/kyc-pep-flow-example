<template>
  <v-sheet color="yellow lighten-4 " rounded elevation class="pa-4 black--text">
    <div class="d-flex align-center mb-2">
      <v-icon color="orange lighten-1">mdi-information</v-icon>
      <span class="text-h6 ml-2">We need more information from you!</span>
    </div>

    <div class="text-body-2 mb-2">
      In order to be able to receive payouts to your bank account, you need to
      provide additional information to the payment provider. This is done in
      connection of preventing money laundering and corruption. During the KYC
      process, all board members of your company will be checked if they are PEP
      (Politically exposed person).
    </div>

    <nuxt-link to="/kyc" class="text-body-2">
      Please follow this link to complete the KYC process.
    </nuxt-link>
  </v-sheet>
</template>

<script>
export default {
  name: 'KycBanner',
}
</script>
