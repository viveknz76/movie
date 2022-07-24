import { movieTheaterDTO } from './../movietheaters/movieTheater.model.d';
import { genreDTO } from './../genres/genres.model.d';
import { actorMovieDTO } from './../actors/actors.model.d';
export interface movieDTO {
  id: number;
  title: string;
  poster: string;
  summary?: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate: Date;
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
  actors: actorMovieDTO[];
}

export interface movieCreationDTO {
  title: string;
  summary?: string;
  inTheaters: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterURL?: string;
  genresIds?: number[];
  movieTheatersIds?: number[];
  actors?: actorMovieDTO[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcomingMovies?: movieDTO[];
}

export interface moviesPostGetDTO {
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
}

export interface moviesPutGetDTO {
  movie: movieDTO;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheaterDTO[];
  nonSelectedMovieTheaters: movieTheaterDTO[];
  actors: actorMovieDTO[];
}
