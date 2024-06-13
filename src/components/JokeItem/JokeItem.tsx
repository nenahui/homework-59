import { IJoke } from '../../types';
import React from 'react';

interface Props {
  joke: IJoke;
  type: string;
}

export const JokeItem: React.FC<Props> = ({ joke, type }) => {
  return (
    <div className={'card'}>
      <div className="card-body">{joke.value}</div>
      <div className="card-footer">
        <button className={`btn btn-outline-${type}`}>Next joke</button>
      </div>
    </div>
  );
};
