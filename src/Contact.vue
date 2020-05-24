<template>
    <div class="container"> 
        <Navbar/>
        <h1>Contact</h1>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: "Contact",
    components: {
        Navbar
    }
}
</script>

<style scoped>
.container {
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 4px;
}
</style>