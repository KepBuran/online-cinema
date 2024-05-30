import { defineStore } from "pinia"
import { Ref, ref, computed } from "vue"

export interface Movie {
    id: number
    title: string
    year: number
}


export const useMovieModel = defineStore('movie', () => {
    const movies: Ref<Movie[]> = ref([
        {
            id: 1,
            title: 'Inception',
            year: 2010,
        },
        {
            id: 2,
            title: 'Interstellar',
            year: 2014,
        },
        {
            id: 3,
            title: 'Tenet',
            year: 2020,
        }
    ])

    const filterTerm: Ref<string> = ref('')
    const setFilterTerm = (term: string) => {
        filterTerm.value = term
    }
  
    const addMovie = (movie: Movie) => {
        movies.value.push(movie)
    }

    const filteredMovies = computed(() => {
        if (!filterTerm.value) {
            return movies.value
        }
        return movies.value.filter(movie => movie.title.toLowerCase().includes(filterTerm.value.toLowerCase()))
    })

    return {
        movies,
        addMovie,
        setFilterTerm,
        filteredMovies
    }
})