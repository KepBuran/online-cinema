<template>
    <div class="add-movie">
      <h2>Add a New Movie</h2>
      <form @submit.prevent="submitForm" style="width:98%">
        <div>
          <label for="title">Title:</label>
          <input id="title" v-model="newMovie.title" required>
          <p v-if="errors.title" class="error">{{ errors.title }}</p>
        </div>
        <div>
          <label for="year">Year:</label>
          <input id="year" type="number" v-model.number="newMovie.year" required>
          <p v-if="errors.year" class="error">{{ errors.year }}</p>
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const newMovie = ref({
    id: Date.now(),
    title: '',
    year: null
  });
  
  const errors = ref({
    title: '',
    year: ''
  });
  
  const emit = defineEmits(['add-movie']);
  
  const validateTitle = () => {
  if (!newMovie.value.title) {
    errors.value.title = 'Title is required';
    return;
  }
  errors.value.title = '';
};

const validateYear = () => {
  if (!newMovie.value.year) {
    errors.value.year = 'Year is required';
    return;
  }
  if (isNaN(newMovie.value.year)) {
    errors.value.year = 'Year must be a number';
    return;
  }
  if (newMovie.value.year < 1900) {
    errors.value.year = 'Year cannot be before 1900';
    return;
  }
  if (newMovie.value.year > new Date().getFullYear()) {
    errors.value.year = 'Year cannot be in the future';
    return;
  }
  errors.value.year = '';
};

const submitForm = () => {
  validateTitle();
  validateYear();

  if (!errors.value.title && !errors.value.year) {
    emit('add-movie', newMovie.value);
    newMovie.value = { id: Date.now(), title: '', year: null };
  }
};
  </script>
  
  <style scoped>
  .add-movie {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  
  .add-movie form div {
    margin-bottom: 10px;
  }
  
  .add-movie label {
    display: block;
    margin-bottom: 5px;
  }
  
  .add-movie input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .add-movie button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
  }
  
  .add-movie button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
  }
  </style>