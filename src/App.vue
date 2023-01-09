<template>
  <div class="ltm-root">
    <NavBar ref="navbar"/>

    <div id="ltm-content" class="container-fluid bg-black text-light">
      <router-view/> 
    </div>
  </div>
  

</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
}/*./views/AboutPage.vue this is included by default by the router but seems unnecessary*/
#ltm-content {
  /*scroll-margin-top: 10rem; todo not sure how this works*/
  padding-top: 50px;
  min-height: 100%;
  font-family: 'Josefin Sans';
}
.ltm-logo{
  width: 150px;
}

.ltm-text-yellow, .ltm-page-link {
    color: rgb(217, 188, 70) !important;
}

.ltm-border-bottom {
    border-bottom: 1px solid rgb(217, 188, 70) !important;
}
</style>