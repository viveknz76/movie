import { useEffect, useState } from 'react';
import { landingPageDTO } from './movies.model';
import MoviesList from './MoviesList';

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg',
          },
          {
            id: 2,
            title: 'Luca',
            poster:
              'https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png',
          },
        ],
        upcomingMovies: [
          {
            id: 1,
            title: 'Soul',
            poster:
              'https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg',
          },
          {
            id: 2,
            title: 'Obi-Wan Kenobi',
            poster:
              'https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
          },
        ],
      });
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      <MoviesList movies={movies.upcomingMovies} />
    </>
  );
}
