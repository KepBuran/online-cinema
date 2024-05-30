<template>
    <div class="movie-filter">
      <input v-model="filter" placeholder="Filter movies..." />
      <button @click="applyFilter">Apply Filter</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const filter = ref('');
  
  const emit = defineEmits(['filter-movies']);

  const applyFilter = () => {
    emit('filter-movies', filter.value);
  };
  </script>
  
  <style scoped>
  .movie-filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .movie-filter input {
    flex-grow: 1;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .movie-filter button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
  }
  
  .movie-filter button:hover {
    background-color: #0056b3;
  }
  </style>