<template>
  <div class="container">
    <Header />
    <CoursesView />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import CoursesView from './views/CoursesView.vue'
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
  padding: 30px;
}

.container {
  width: 650px;
}
</style>