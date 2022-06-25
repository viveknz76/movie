import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { genreDTO } from './genres.model';

export default function IndexGenres() {
  useEffect(() => {
    axios
      .get('https://localhost:7006/api/genres')
      .then((response: AxiosResponse<genreDTO[]>) => {
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <h3>Genres</h3>
      <Link className="btn btn-primary" to="/genres/create">
        Create genre
      </Link>
    </>
  );
}
