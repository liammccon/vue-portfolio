<template>
  <div class="ltm-root">
    <NavBar ref="navbar" id="ltm-navbar"/>

    <div id="ltm-content" class="container-fluid text-light">
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
}

#ltm-navbar{
  z-index: 1;
}

#ltm-content {
  /*scroll-margin-top: 10rem; todo not sure how this works*/
  min-height: 100%;
  font-family: 'Josefin Sans';
  background-color: rgba(217, 188, 70, 0) !important;
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
.ltm-border-top {
    border-top: 1px solid rgb(217, 188, 70) !important;
    padding-top: 15px;
}
</style>