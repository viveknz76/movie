import { NavLink } from 'react-router-dom';
import Authorised from './auth/Authorised';

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Movies
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/filter">
                Filter Movies
              </NavLink>
            </li>
            <Authorised
              role="admin"
              authorised={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/genres">
                      Genres
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/actors">
                      Actors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/movietheaters">
                      Movie Theaters
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/movies/create">
                      Create a Movie
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
