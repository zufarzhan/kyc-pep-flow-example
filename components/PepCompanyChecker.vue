<template>
  <v-card class="py-6 px-10">
    <div class="text-h6 mb-2">PEP company checker</div>
    <v-divider></v-divider>
    <v-alert dense type="info">
      Please enter your company's organization number and then press "Check".
      All board members will be checked against PEP dataset available on
      <a href="https://www.opensanctions.org/" target="_blank">
        Open Sanctions
      </a>
      website.
      <v-divider class="my-2" />
      People marked with orange color are PEP.
    </v-alert>
    <v-form @submit.prevent="checkCompanyBoardMembers">
      <v-row class="mt-2 px-4" align="center">
        <v-text-field
          v-model="orgNumber"
          label="Organization number"
          required
        ></v-text-field>
        <v-btn class="ml-4" color="primary" type="submit">Check</v-btn>
      </v-row>
    </v-form>
    <div v-if="checkedBoardMembers.length" class="mt-4" align="center">
      <v-alert
        v-for="(member, i) in checkedBoardMembers"
        :key="i"
        dense
        text
        :type="member.isPep ? 'warning' : 'success'"
      >
        {{ member.name }}
      </v-alert>
      <div class="d-flex justify-end">
        <v-btn color="primary">Submit</v-btn>
      </div>
    </div>
    <v-alert v-if="error" class="mt-4" dense type="error">
      {{ error }}
    </v-alert>
  </v-card>
</template>

<script>
export default {
  name: 'PepCompanyCheck',
  data() {
    return {
      orgNumber: '',
      error: '',
      checkedBoardMembers: [],
    }
  },

  methods: {
    async checkCompanyBoardMembers() {
      this.error = null
      if (!this.orgNumber.match(/^\d{9}$/)) {
        this.error = 'Organization number should consist of 9 digits'
        return
      }

      try {
        const roles = await this.$axios.$get(
          `https://data.brreg.no/enhetsregisteret/api/enheter/${this.orgNumber}/roller`
        )

        const names = this.getBoardMembersNames(roles)
        const response = await this.$axios.get(
          `/api/pep?names=${names.join(';')}`
        )
        const peps = response.data.peps

        this.checkedBoardMembers = names.map((name) => {
          return { name, isPep: peps.some((pep) => pep.name === name) }
        })
      } catch (error) {
        this.error = error.response.data.message
      }
    },

    getBoardMembersNames(roles) {
      const boardMembers = roles.rollegrupper.find(
        (roleGroup) => roleGroup.type.kode === 'STYR'
      ).roller

      return boardMembers.map((member) => {
        const name = member.person.navn
        return `${name.fornavn} ${
          name.mellomnavn ? name.mellomnavn + ' ' : ''
        }${name.etternavn}`
      })
    },
  },
}
</script>
