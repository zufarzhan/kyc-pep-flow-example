<template>
  <v-card>
    <v-card-title>Transactions</v-card-title>
    <v-divider />

    <v-container class="pa-4">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Date</th>
              <th class="text-left">Amount (kr)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 9" :key="i">
              <td>John Doe</td>
              <td>01.04.2023</td>
              <td>29.4 kr</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentTransaction',
}
</script>
