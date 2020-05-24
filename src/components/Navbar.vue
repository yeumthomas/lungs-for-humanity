<template>
  <header>
    <img :src="images" alt="lfh-logo" class="logo"/>
    <nav>
        <ul>
            <li><a href="/">Orders</a></li>
            <li><a href="/apollobvm">The ApolloBVM</a></li>
            <li><a href="/donate">Donate Now!</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="/contact">Contact Us</a></li>
        </ul>
    </nav>
   </header>

<!--
        <div class="image-holder">
            <img :src="images" alt="lfh-logo" class="logo"/>
        </div>
        <el-menu :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><a href="/">Orders</a></el-menu-item>
            <el-menu-item index="2"><a href="/apollobvm">The ApolloBVM</a></el-menu-item>
            <el-menu-item index="3"><a href="/donate">Donate Now!</a></el-menu-item>
            <el-menu-item index="4"><a href="/contact">Contact Us</a></el-menu-item>
        </el-menu>
-->
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
    margin-left: 40px;
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
    margin: 20px;
    padding: 15px 10px 15px 10px;
}

header li a {
    color: black;
    text-decoration: none;
}

header li:hover {
  border: 1px solid grey ;
  border-radius: 10px;
  padding: 15px 9px 15px 9px;
}
</style>