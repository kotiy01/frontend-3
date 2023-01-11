<template>
  <v-app>
    <HeaderComponent />
    <router-view />
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
};
</script>
