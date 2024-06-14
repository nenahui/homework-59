import React from 'react';

interface Props {
  type: string;
  onClick: VoidFunction;
}

export const NextJokeButton: React.FC<Props> = React.memo(
  ({ type, onClick }) => {
    return (
      <button onClick={onClick} className={`btn btn-outline-${type}`}>
        Next jokes
      </button>
    );
  },
  (prevProps, nextProps) => prevProps.type === nextProps.type
);
