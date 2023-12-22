// TargetComponent.js
import React from 'react';
import { useDrop } from 'react-dnd';

const TargetComponent = ({ onDrop }) => {
  const [, drop] = useDrop({
    accept: 'ITEM', // Specify the accepted type for dropped items
    drop: (item) => onDrop(item), // Callback function when an item is dropped
  });

  return (
    <div ref={drop} style={{ border: '2px dashed #000', padding: '16px' }}>
      Drop here
    </div>
  );
};

export default TargetComponent;
