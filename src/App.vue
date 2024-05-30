<template>
  <div class="app-wrapper">
    <MovieAdd @add-movie="controller.addMovie"></MovieAdd>
    <MovieFilter @filter-movies="controller.filterMovies"></MovieFilter>
    <div v-if="filteredMovies.length" class="movies-container">
        <MovieView v-for="movie in filteredMovies" :movie="movie" :key="movie.id"/>
      </div>
    <p v-else>
      No movies found.
    </p>
  </div>
</template>

<script setup lang="ts">
import MovieView from './components/MovieView.vue'
import MovieFilter from './components/MovieFilter.vue'
import MovieAdd from './components/MovieAdd.vue'
import { useMovieModel } from './models/MovieModel'
import { computed } from 'vue'
import { MovieController } from './controllers/MovieController'

const filteredMovies = computed(() => {
  return useMovieModel().filteredMovies
})

const controller = new MovieController()

</script>

<style>
.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.app-wrapper {
  background-color: antiquewhite;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
