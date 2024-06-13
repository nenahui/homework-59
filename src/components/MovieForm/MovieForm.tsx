import React, { useState } from 'react';
import { IMovie, IMovieMutation } from '../../types';
import { nanoid } from 'nanoid';

interface Props {
  type: string;
  onSubmit: (movie: IMovie) => void;
}

export const MovieForm: React.FC<Props> = ({ type, onSubmit }) => {
  const [movieMutation, setMovieMutation] = useState<IMovieMutation>({
    title: '',
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieMutation((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: nanoid(),
      ...movieMutation,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={onChange}
          name={'title'}
          value={movieMutation.title}
          placeholder="Movie name"
          required
        />
        <button className={`btn btn-outline-${type}`} type="submit">
          Add movie
        </button>
      </div>
    </form>
  );
};
