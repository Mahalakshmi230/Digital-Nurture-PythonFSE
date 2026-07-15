<template>
  <header class="header">

    <h1>Student Portal</h1>

    <h3>
      Enrolled Courses :
      {{ store.enrolledCourses.length }}
    </h3>

  </header>
</template>

<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<style scoped>
.header {
  background: #42b883;
  color: white;
  text-align: center;
  padding: 18px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>