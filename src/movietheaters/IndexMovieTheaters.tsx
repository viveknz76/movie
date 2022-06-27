import { urlMovieTheaters } from '../endpoints';
import IndexEntity from '../utils/IndexEntity';
import { movieTheaterDTO } from './movieTheater.model';

export default function IndexMovieTheater() {
  return (
    <>
      <IndexEntity<movieTheaterDTO>
        url={urlMovieTheaters}
        createURL="movietheaters/create"
        title="Movie Theaters"
        entityName="MovieTheater"
      >
        {(movieTheaters, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {movieTheaters?.map((movieTheater) => (
                <tr key={movieTheater.id}>
                  <td>
                    {buttons(
                      `movietheaters/edit/${movieTheater.id}`,
                      movieTheater.id
                    )}
                  </td>
                  <td>{movieTheater.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndexEntity>
    </>
  );
}
