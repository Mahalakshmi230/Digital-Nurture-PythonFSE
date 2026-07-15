<template>
  <div class="container">
    <h2>Courses</h2>

    <input
      type="text"
      v-model="searchTerm"
      placeholder="Search Course"
      class="search"
    />

    <div class="cards">
      <CourseCard
        v-for="course in filteredCourses"
        :key="course.id"
        :name="course.name"
        :code="course.code"
        :credits="course.credits"
        :grade="course.grade"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import CourseCard from "../components/CourseCard.vue"

const courses = ref([])
const searchTerm = ref("")

onMounted(() => {
  courses.value = [
    { id: 1, name: "Java", code: "CS101", credits: 4, grade: "A" },
    { id: 2, name: "Python", code: "CS102", credits: 3, grade: "A+" },
    { id: 3, name: "Angular", code: "CS103", credits: 4, grade: "B+" },
    { id: 4, name: "React", code: "CS104", credits: 3, grade: "A" },
    { id: 5, name: "Vue", code: "CS105", credits: 2, grade: "A" }
  ]
})

const filteredCourses = computed(() =>
  courses.value.filter(course =>
    course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
</script>

<style scoped>
.container {
  text-align: center;
}

.search {
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid gray;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>