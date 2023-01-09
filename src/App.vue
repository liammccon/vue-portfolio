<template>
  <div class="ltm-root">
    <NavBar ref="navbar"/>

    <div id="ltm-content" class="container-fluid bg-black text-light">
      <AboutPage/>
      <img src="./assets/liam-logo-1.svg" class="ltm-logo" alt="French horn logo"/>
    </div>
  </div>
  

</template>

<script>
import NavBar from './components/NavBar.vue'
import AboutPage from './components/AboutPage.vue'

export default {
  name: 'App',
  components: {
    NavBar, AboutPage
  }, 
  data() {
    return {

    }
  },
  methods: {

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
#ltm-content {
  /*scroll-margin-top: 10rem; todo not sure how this works*/
  padding-top: 50px;
  min-height: 100%;
  font-family: 'Josefin Sans';
}
.ltm-logo{
  width: 150px;
}
</style>
