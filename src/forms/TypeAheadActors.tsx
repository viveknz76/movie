import { ReactElement } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { actorMovieDTO } from '../actors/actors.model';

export default function TypeAheadActors(props: typeAheadActorsProps) {
  const actors: actorMovieDTO[] = [
    {
      id: 1,
      name: 'Tom Holland',
      character: '',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg',
    },
    {
      id: 2,
      name: 'Jessica Biel',
      character: '',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jessica_Biel_2013.jpg/330px-Jessica_Biel_2013.jpg',
    },
    {
      id: 3,
      name: 'Daniel Craig',
      character: '',
      picture:
        'https://upload.wikimedia.org/wikipedia/commons/7/7f/Daniel_Craig_-_Film_Premiere_%22Spectre%22_007_-_on_the_Red_Carpet_in_Berlin_%2822387409720%29_%28cropped%29.jpg',
    },
  ];

  const selected: actorMovieDTO[] = [];
  return (
    <div className="mb-3">
      <label>{props.displayName}</label>
      <Typeahead
        id="typeahead"
        onChange={(actors) => {
          if (props.actors.findIndex((x) => x.id === actors[0].id) === -1) {
            props.onAdd([...props.actors, actors[0]]);
          }
          console.log(actors);
        }}
        options={actors}
        labelKey={(actor) => actor.name}
        filterBy={['name']}
        placeholder="Write the name of the actor..."
        minLength={1}
        flip={true}
        selected={selected}
        renderMenuItemChildren={(actor) => (
          <>
            <img
              alt="actor"
              src={actor.picture}
              style={{
                height: '64px',
                marginRight: '10px',
                width: '64px',
              }}
            />
            <span>{actor.name}</span>
          </>
        )}
      />
      <ul className="list-group">
        {props.actors.map((actor) => (
          <li key={actor.id} className="list-group-item list-group-item-action">
            {props.listUI(actor)}
            <span
              className="badge badge-primary badge-pill pointer text-dark"
              style={{ margin: '0.5rem' }}
              onClick={() => props.onRemove(actor)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface typeAheadActorsProps {
  displayName: string;
  actors: actorMovieDTO[];
  onAdd(actors: actorMovieDTO[]): void;
  listUI(actor: actorMovieDTO): ReactElement;
  onRemove(actor: actorMovieDTO): void;
}
