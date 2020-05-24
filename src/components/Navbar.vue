<template>
  <header>
    <img style="min-width: 160px" :src="images" alt="lfh-logo" class="logo"/>
    <nav>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/donate">Donate Now!</a></li>
          <li><a href="/apollobvm">The ApolloBVM</a></li>
          <li><a href="/">Home</a></li>
          <li class="socials"><a href="https://facebook.com" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'facebook-square']"/></a></li>
          <li class="socials"><a href="https://facebook.com" target="_blank"><font-awesome-icon class="icon" :icon="['fab', 'instagram']"/></a></li>
          <li class="socials"><a href="https://facebook.com" target="_blank"><font-awesome-icon class="icon" icon="envelope"/></a></li>
        </ul>
    </nav>
   </header>
</template>

<script>

export default {
    name: 'Navbar',
    data () {
        return {
            images: require('@/assets/lfh_logo_black.png')
        }
    }   
}
</script>

<style scoped>

header img {
  height: 30px;
  margin: 15px 20% 15px 5%;
}

header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px 0 grey;
}

header * {
  display: inline;
}

header li {
  float: right;
  margin: 10px;
  padding: 15px 10px;
}

header li a {
  color: black;
  text-decoration: none;
}

header li:hover {
border: 2px solid #f5bdbd;
border-radius: 10px;
padding: 13px 8px;
}

.socials {
  padding: 15px 5px;
  margin: 10px 5px;
}

.socials:hover {  
  border: 0px;
  padding: 15px 5px;
}

.icon:hover {
  color: #f5bdbd;
  transform:translateY(-2px);
}
</style>