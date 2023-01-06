<template>
  <NavBar class="ltm-navbar"/>

  <div class="ltm-content">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur, consequuntur placeat eos possimus illo quisquam eius corrupti esse recusandae consequatur autem quis. Magnam voluptatem laudantium ratione quaerat, officia animi!</p> 
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime rerum beatae debitis. Nesciunt temporibus expedita doloribus esse blanditiis beatae, provident, commodi, veritatis modi voluptatum debitis sapiente. Consequatur, ea atque!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur, consequuntur placeat eos possimus illo quisquam eius corrupti esse recusandae consequatur autem quis. Magnam voluptatem laudantium ratione quaerat, officia animi!</p> 
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime rerum beatae debitis. Nesciunt temporibus expedita doloribus esse blanditiis beatae, provident, commodi, veritatis modi voluptatum debitis sapiente. Consequatur, ea atque!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur, consequuntur placeat eos possimus illo quisquam eius corrupti esse recusandae consequatur autem quis. Magnam voluptatem laudantium ratione quaerat, officia animi!</p> 
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime rerum beatae debitis. Nesciunt temporibus expedita doloribus esse blanditiis beatae, provident, commodi, veritatis modi voluptatum debitis sapiente. Consequatur, ea atque!</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus tenetur, consequuntur placeat eos possimus illo quisquam eius corrupti esse recusandae consequatur autem quis. Magnam voluptatem laudantium ratione quaerat, officia animi!</p> 
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime rerum beatae debitis. Nesciunt temporibus expedita doloribus esse blanditiis beatae, provident, commodi, veritatis modi voluptatum debitis sapiente. Consequatur, ea atque!</p>

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
.ltm-content {
  /*scroll-margin-top: 10rem; todo not sure how this works*/
  margin-top: 100px;
}
</style>
