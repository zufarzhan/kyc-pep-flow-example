<template>
  <v-card class="py-6 px-10">
    <div class="text-h6 mb-2">Personal information</div>
    <v-divider></v-divider>
    <v-form v-model="valid" class="mt-6">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone"
        :rules="phoneRules"
        label="Phone number"
        required
      ></v-text-field>
      <v-menu
        v-model="dateMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template #activator="{ on, attrs }">
          <v-text-field
            v-model="dateOfBirth"
            label="Date of birth"
            prepend-icon="mdi-calendar"
            readonly
            :rules="dateOfBirthRules"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateOfBirth"
          @input="dateMenu = false"
        ></v-date-picker>
      </v-menu>
    </v-form>

    <div class="d-flex justify-end">
      <v-btn color="primary">Submit</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PersonalInfoForm',
  data() {
    return {
      valid: false,
      name: '',
      nameRules: [(v) => !!v || 'Name is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      phoneRules: [(v) => !!v || 'Phone is required'],
      dateOfBirth: null,
      dateOfBirthRules: [(v) => !!v || 'Date of birth is required'],
      dateMenu: false,
    }
  },
}
</script>
