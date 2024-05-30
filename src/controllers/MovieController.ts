import { useMovieModel, Movie } from "@/models/MovieModel"

export class MovieController {

  private movieModel = useMovieModel()
  public constructor() {

  }

  addMovie = async (movie: Movie) => {
    console.log('addMovie', movie)
    this.movieModel.addMovie(movie as Movie)
  }
  
  filterMovies = async (term: string) => {
    console.log('filterMovies', term, this.movieModel.setFilterTerm)
    this.movieModel.setFilterTerm(term)
  }
}
