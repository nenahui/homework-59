import { MovieForm } from './components/MovieForm/MovieForm';
import { MovieItem } from './components/MovieItem/MovieItem';

export const App = () => {
  return (
    <div className={'container-fluid'}>
      <MovieForm />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  );
};
