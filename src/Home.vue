<template>
    <div class="home"> 
        <Navbar/>
        <p>Hi there</p>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'Home',
  //created() {
   // setTimeout(() => {
   //   this.loading = false;
   // }, 2400);
  //},

  data() {
    return {
          //loading: true
      }      
  },
  
  components: {
    Navbar
  }
}
</script>

<style>
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}
</style>
