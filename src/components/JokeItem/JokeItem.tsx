import { IJoke } from '../../types';
import React from 'react';

interface Props {
  joke: IJoke;
}

export const JokeItem: React.FC<Props> = React.memo(
  ({ joke }) => {
    return (
      <div className={'card mb-2'}>
        <div className="card-body">{joke.value}</div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.joke.id === nextProps.joke.id
);
