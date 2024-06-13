import React from 'react';

interface Props {
  name: string;
  type: string;
  onDelete: VoidFunction;
  onChange: (value: string) => void;
}

export const MovieItem: React.FC<Props> = React.memo(
  ({ name, type, onDelete, onChange }) => {
    return (
      <div
        className={`p-1 alert alert-${type} d-flex justify-content-between align-items-center gap-3`}
      >
        <input
          type="text"
          className={'bg-transparent border-0 w-100 p-2'}
          value={name}
          style={{ outline: 'none' }}
          onChange={(e) => onChange(e.target.value)}
        />
        <i
          className={'bi bi-x-circle me-2'}
          role={'button'}
          onClick={onDelete}
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.name === nextProps.name
);
