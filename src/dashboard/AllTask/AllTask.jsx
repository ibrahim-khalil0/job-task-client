// SourceComponent.js
import React from 'react';
import { useDrag } from 'react-dnd';

const SourceComponent = ({ item }) => {
  const [, drag] = useDrag({
    type: 'ITEM', // Specify a unique type for the item being dragged
    item: { id: item.id, type: 'ITEM' },
  });

  return (
    <div ref={drag} style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}>
      {item.name}
    </div>
  );
};

export default SourceComponent;
