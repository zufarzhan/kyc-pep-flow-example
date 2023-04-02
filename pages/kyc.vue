<template>
  <v-container>
    <div class="text-h4 mb-10">KYC process</div>

    <v-row>
      <v-col cols="12" sm="6">
        <personal-info-form />
      </v-col>
      <v-col cols="12" sm="6">
        <pep-company-checker />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'KycPage',
}
</script>
