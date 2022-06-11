import { genreDTO } from '../genres/genres.model';
import MovieForm from './MovieForm';

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Drama' },
  ];

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{ title: '', inTheaters: false, trailer: '' }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={[]}
      />
    </>
  );
}
