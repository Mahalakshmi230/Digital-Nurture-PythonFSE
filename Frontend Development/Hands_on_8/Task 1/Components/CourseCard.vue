<template>
  <div class="card">
    <h3>{{ name }}</h3>

    <p><b>Code:</b> {{ code }}</p>

    <p><b>Credits:</b> {{ credits }}</p>

    <p><b>Grade:</b> {{ grade }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  code: String,
  credits: Number,
  grade: String
})
</script>

<style scoped>
.card {
  width: 180px;
  background: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

h3 {
  color: #42b883;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}
</style>