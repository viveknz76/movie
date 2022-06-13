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
    {
      id: 3,
      name: 'Daniel Craig',
      character: '',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/7/7f/Daniel_Craig_-_Film_Premiere_%22Spectre%22_007_-_on_the_Red_Carpet_in_Berlin_%2822387409720%29_%28cropped%29.jpg',
    },
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
