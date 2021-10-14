<template>
  <div id="app" class="container">
    <NavBar />
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  //import

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
    color: #2c2c2c;
  }
  
</style>