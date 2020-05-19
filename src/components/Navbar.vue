<template>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1"><a href="/">Orders</a></el-menu-item>
    <el-menu-item index="2"><a href="/apollobvm">The ApolloBVM</a></el-menu-item>
    <el-menu-item index="3"><a href="/donate">Donate Now!</a></el-menu-item>
    <el-menu-item index="4"><a href="/contact">Contact Us</a></el-menu-item>
    </el-menu>
</template>

<script>

export default {
    name: 'Navbar',
    }
</script>

<style scoped>

</style>