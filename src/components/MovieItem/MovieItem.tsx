import React from 'react';

interface Props {
  name: string;
  type: string;
  onDelete: VoidFunction;
}

export const MovieItem: React.FC<Props> = ({ name, type, onDelete }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between list-group-item-${type}`}
    >
      {name}
      <i className={'bi bi-x-circle'} role={'button'} onClick={onDelete} />
    </li>
  );
};
