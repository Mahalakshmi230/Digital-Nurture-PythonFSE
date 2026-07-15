<template>
  <div class="page">
    <h2>Course Detail</h2>

    <p>This page is optional for Task 3.</p>

    <RouterLink to="/courses">
      Back to Courses
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.page {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
}
</style>