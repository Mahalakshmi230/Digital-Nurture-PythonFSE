<template>
  <div class="page">

    <h2>Profile</h2>

    <h3>Enrolled Courses</h3>

    <div v-if="store.enrolledCourses.length === 0">
      No courses enrolled.
    </div>

    <div
      v-for="course in store.enrolledCourses"
      :key="course.id"
      class="card"
    >
      <h4>{{ course.name }}</h4>

      <p>Code: {{ course.code }}</p>

      <p>Credits: {{ course.credits }}</p>

      <button @click="store.unenroll(course.id)">
        Remove
      </button>
    </div>

    <h3>Total Credits : {{ store.totalCredits }}</h3>

  </div>
</template>

<script setup>
import { useEnrollmentStore } from '../stores/enrollment'

const store = useEnrollmentStore()
</script>

<style scoped>
.page {
  text-align: center;
}

.card {
  width: 250px;
  margin: 15px auto;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
}

button {
  padding: 8px 15px;
  border: none;
  background: crimson;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>