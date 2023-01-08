<template>
  <NavBar class="ltm-navbar"/>

  <div class="ltm-content container-fluid bg-black text-light">
    <AboutPage/>
    <img src="./assets/liam-logo-1.svg" class="ltm-logo" alt="French horn logo"/>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import AboutPage from './components/AboutPage.vue'

export default {
  name: 'App',
  components: {
    NavBar, AboutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ltm-content {
  /*scroll-margin-top: 10rem; todo not sure how this works*/
  padding-top: 100px;
  min-height: 100%;
  font-family: 'Josefin Sans';
}
.ltm-logo{
  width: 150px;
}
</style>
