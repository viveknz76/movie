import MovieTheaterForm from './MovieTheaterForm';

export default function CreateMovieTheater() {
  return (
    <>
      <h3>Create movie theater</h3>
      <MovieTheaterForm
        model={{ name: '' }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1));
          console.log(values);
        }}
      />
    </>
  );
}
