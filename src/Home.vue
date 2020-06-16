<template>
  <div class="container">
    <div class="home"> 
        <!-- <div v-if="loading">
            <div class="spinner-wrapper">
                <div class="spinner-heart"></div>  
            </div>
        </div>
        <div v-else class="container"> -->
        <div class="container">
            <Navbar />
            <Donate />
            <div class='title'>
              <h1 class='title-text'>We are Team</h1>
              <h1 class="title-text">Lungs For Humanity.</h1>
            </div>
        </div>
        <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Donate from './components/Donate-Alert.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'Home',
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 2900);
  },

  data() {
    return {
          loading: true
      }      
  },
  
  components: {
    Navbar,
    Donate,
    Footer
  }
}
</script>

<style scoped>

.container {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 4px;
}
#home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title-text {
  font-size: 7vh;
  margin: 5px 5px;
}
/***SPINNER HEART STYLE***/
.spinner-heart {
  position: absolute;
  height: 48px;
  width: 48px;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  transform: rotate(45deg);
  background-color: #e06666;
  animation-name: spinner-heart;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
}

.spinner-heart::before, .spinner-heart::after {
content: '';
display: block;
position: absolute;
box-sizing: border-box;
height: 48px;
width: 48px;
border-radius: 50%;
background-color: #e06666;
}
  
.spinner-heart::before {
left: -25px;
}

.spinner-heart::after {
top: -25px;
}

@keyframes spinner-heart {
  0% {
    transform: rotate(45deg) scale(1);
  }
  35% {
    transform: rotate(50deg) scale(1.1);
  }
  50% {
    transform: rotate(45deg) scale(1);
  }
  60% {
    transform: rotate(38deg) scale(1.25);
  }
  100% {
    transform: rotate(45deg) scale(1);
  }
}

</style>
