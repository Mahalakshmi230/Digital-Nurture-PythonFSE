<template>
  <div class="page">
    <h2>Course Details</h2>

    <h3>{{ course.name }}</h3>

    <p>Code : {{ course.code }}</p>

    <p>Credits : {{ course.credits }}</p>

    <button @click="enroll">
      Enroll
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const courses = [
  { id: 1, name: 'Java', code: 'CS101', credits: 4 },
  { id: 2, name: 'Python', code: 'CS102', credits: 3 },
  { id: 3, name: 'Angular', code: 'CS103', credits: 4 },
  { id: 4, name: 'React', code: 'CS104', credits: 3 },
  { id: 5, name: 'Vue', code: 'CS105', credits: 2 }
]

const course = courses.find(
  c => c.id == route.params.id
)

function enroll() {
  alert('Enrollment Successful')
  router.push('/profile')
}
</script>

<style scoped>
.page {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

button {
  padding: 10px 20px;
  background: #42b883;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>