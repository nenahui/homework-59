import { MovieForm } from './components/MovieForm/MovieForm';
import { MovieItem } from './components/MovieItem/MovieItem';
import { useState } from 'react';
import { IMovie } from './types';
import { nanoid } from 'nanoid';

const bootstrapTypes = ['primary', 'danger', 'info', 'success'];
const randomType = () =>
  bootstrapTypes[Math.floor(Math.random() * bootstrapTypes.length)];

export const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([
    { title: 'Requiem for a dream', id: nanoid() },
    { title: 'The Basketball Diaries', id: nanoid() },
    { title: 'The Wolf of Wall Street', id: nanoid() },
  ]);

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
      <MovieForm onSubmit={addMovie} type={randomType()} />

      <ul className="list-group mt-3">{moviesList}</ul>
    </div>
  );
};
