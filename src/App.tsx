import { MovieForm } from './components/MovieForm/MovieForm';
import { MovieItem } from './components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { IJoke, IMovie } from './types';
import { nanoid } from 'nanoid';
import { JokeItem } from './components/JokeItem/JokeItem';

const bootstrapTypes = ['primary', 'danger', 'info'];
const randomType = () =>
  bootstrapTypes[Math.floor(Math.random() * bootstrapTypes.length)];

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

export const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    { title: 'Requiem for a dream', id: nanoid() },
    { title: 'The Basketball Diaries', id: nanoid() },
    { title: 'The Wolf of Wall Street', id: nanoid() },
  ]);
  const [jokes, setJokes] = useState<IJoke>({
    id: '',
    value: '',
  });
  const [newJokes, setNewJokes] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(jokeUrl);
      const data = await response.json();
      setJokes(data);
    };

    void fetchData();
  }, [newJokes]);

  const addMovie = (movie: IMovie) => {
    setMovies((prevState) => [...prevState, movie]);
  };

  const deleteMovie = (id: string) => {
    setMovies((prevState) => prevState.filter((movie) => movie.id !== id));
  };

  const editMovieName = (id: string, title: string) => {
    setMovies((prevState) =>
      prevState.map((movie) => (movie.id === id ? { ...movie, title } : movie))
    );
  };

  const moviesList = movies.map((movie) => (
    <MovieItem
      key={movie.id}
      type={randomType()}
      name={movie.title}
      onDelete={() => deleteMovie(movie.id)}
      onChange={(title) => editMovieName(movie.id, title)}
    />
  ));

  return (
    <div className={'container-fluid mt-5'}>
      <div className="row">
        <div className="col-6">
          <MovieForm onSubmit={addMovie} type={randomType()} />
          <ul className="list-group mt-3">{moviesList}</ul>
        </div>
        <div className="col-6">
          <JokeItem
            onClick={() => setNewJokes((prevState) => !prevState)}
            key={jokes.id}
            joke={jokes}
            type={randomType()}
          />
        </div>
      </div>
    </div>
  );
};
