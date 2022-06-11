import { useParams } from 'react-router-dom';
import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
  const { id }: any = useParams();

  return (
    <>
      <h3>Edit movie theater</h3>
      <MovieTheaterForm
        model={{ name: '' }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(id);
          console.log(values);
        }}
      />
    </>
  );
}
