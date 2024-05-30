<template>
    <div class="movie">
      <h2>{{ props.movie.title }}</h2>
      <p>Year: {{ props.movie.year }}</p>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  movie: {
    title: string,
    year: number
  }
}>()

</script>
  
<style scoped>
.movie {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fffefb;
  transition: box-shadow 0.3s ease;
}

.movie:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.movie h2 {
  margin: 0;
  color: #333;
  font-size: 1.5em;
}

.movie p {
  margin: 0;
  color: #666;
}
</style>