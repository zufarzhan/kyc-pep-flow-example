<template>
  <v-menu offset-y>
    <template #activator="{ on }">
      <button
        type="button"
        class="d-flex justify-center align-center"
        v-on="on"
      >
        <v-avatar>
          <img :src="userAvatar" alt="User Avatar" />
        </v-avatar>
        <span class="ml-3 d-none d-sm-flex">{{ userName }}</span>
      </button>
    </template>
    <v-list>
      <v-list-item v-for="(item, i) in menuItems" :key="i">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'ProfileMenu',
  data() {
    return {
      userName: 'John Doe',
      userAvatar: 'https://api.dicebear.com/6.x/bottts/svg?seed=Scooter',
    }
  },
  computed: {
    menuItems() {
      const items = [
        {
          icon: 'mdi-account',
          name: this.userName,
        },
        {
          icon: 'mdi-cog',
          name: 'Settings',
        },
        {
          icon: 'mdi-face-agent',
          name: 'Support',
        },
        {
          icon: 'mdi-logout',
          name: 'Logout',
        },
      ]
      return items
    },
  },
}
</script>
