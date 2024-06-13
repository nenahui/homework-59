import { IJoke } from '../../types';
import React from 'react';

interface Props {
  joke: IJoke;
  type: string;
  onClick: VoidFunction;
}

export const JokeItem: React.FC<Props> = React.memo(
  ({ joke, type, onClick }) => {
    return (
      <div className={'card'}>
        <div className="card-body">{joke.value}</div>
        <div className="card-footer">
          <button className={`btn btn-outline-${type}`} onClick={onClick}>
            Next joke
          </button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.joke.id === nextProps.joke.id
);
