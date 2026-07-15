<template>
  <div class="page">
    <h2>Courses</h2>

    <div class="course-container">
      <div
        class="card"
        v-for="course in courses"
        :key="course.id"
      >
        <h3>{{ course.name }}</h3>

        <p><strong>Code:</strong> {{ course.code }}</p>

        <p><strong>Credits:</strong> {{ course.credits }}</p>

        <RouterLink
          class="btn"
          :to="`/courses/${course.id}`"
        >
          View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const courses = ref([
  {
    id: 1,
    name: 'Java',
    code: 'CS101',
    credits: 4
  },
  {
    id: 2,
    name: 'Python',
    code: 'CS102',
    credits: 3
  },
  {
    id: 3,
    name: 'Angular',
    code: 'CS103',
    credits: 4
  },
  {
    id: 4,
    name: 'React',
    code: 'CS104',
    credits: 3
  },
  {
    id: 5,
    name: 'Vue',
    code: 'CS105',
    credits: 2
  }
])
</script>

<style scoped>
.page {
  text-align: center;
}

.course-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  width: 220px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
}

.btn {
  display: inline-block;
  margin-top: 10px;
  background: #42b883;
  color: white;
  padding: 8px 15px;
  text-decoration: none;
  border-radius: 5px;
}
</style>