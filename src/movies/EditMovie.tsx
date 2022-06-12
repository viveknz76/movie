import { actorMovieDTO } from '../actors/actors.model';
import { genreDTO } from '../genres/genres.model';
import { movieTheaterDTO } from '../movietheaters/movieTheater.model';
import MovieForm from './MovieForm';

export default function EditMovie() {
  const selectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }];
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: 'Drama' }];

  const selectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: 'Te Awa' },
    { id: 3, name: 'City Centre' },
  ];
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: 'Chartwell' },
  ];

  const selectedActors: actorMovieDTO[] = [
    { id: 1, name: 'Daniel Craig', character: '', picture: '' },
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: 'Toy Story',
          inTheaters: true,
          trailer: 'url',
          releaseDate: new Date('2019-01-01T00:00:00'),
        }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
