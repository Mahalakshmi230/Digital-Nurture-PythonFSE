<template>
  <div class="container">

    <Header />

    <nav>

      <RouterLink to="/">Home</RouterLink>

      <RouterLink to="/courses">Courses</RouterLink>

      <RouterLink to="/profile">Profile</RouterLink>

    </nav>

    <RouterView />

  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
}

#app {
  display: flex;
  justify-content: center;
}

.container {
  width: 700px;
  margin-top: 20px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  background: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
}

nav a {
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}

.router-link-active {
  color: #2c3e50;
}
</style>