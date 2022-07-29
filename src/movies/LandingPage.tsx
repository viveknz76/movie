import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Authorised from '../auth/Authorised';
import { urlMovies } from '../endpoints';
import AlertContext from '../utils/AlertContext';
import { landingPageDTO } from './movies.model';
import MoviesList from './MoviesList';

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }
  return (
    <>
      <AlertContext.Provider
        value={() => {
          loadData();
        }}
      />
      <Authorised
        authorised={<>You are authorised</>}
        notAuthorised={<>You are not authorised</>}
        role="admin"
      />
      <h3>In Theaters</h3>
      <MoviesList movies={movies.inTheaters} />

      <h3>Upcoming Releases</h3>
      {movies.upcomingMovies ? (
        <MoviesList movies={movies.upcomingMovies} />
      ) : (
        <div>No upcoming releases</div>
      )}
    </>
  );
}
