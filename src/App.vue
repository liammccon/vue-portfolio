<template>
  <NavBar class="ltm-navbar"/>

  <div class="ltm-content">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur, consequuntur placeat eos possimus illo quisquam eius corrupti esse recusandae consequatur autem quis. Magnam voluptatem laudantium ratione quaerat, officia animi!</p> 
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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
.ltm-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.ltm-content {
  /*scroll-margin-top: 10rem; todo not sure how this works*/
  margin-top: 100px;
}
</style>
