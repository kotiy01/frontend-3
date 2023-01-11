<template>
  <v-app>
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent, FooterComponent
  }
};
</script>
