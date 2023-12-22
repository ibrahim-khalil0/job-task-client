import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SourceComponent from "../AllTask/AllTask";
import TargetComponent from "../RunningTask/RunningTask";



const TaskForm = () => {

  const [droppedItem, setDroppedItem] = useState(null);

  const handleDrop = (item) => {
    setDroppedItem(item);
  };

    return (
      <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Drag and Drop Example</h1>
        <SourceComponent item={{ id: 1, name: 'Item 1' }} />
        <SourceComponent item={{ id: 2, name: 'Item 2' }} />
        <TargetComponent onDrop={handleDrop} />
        {droppedItem && <p>Dropped item: {droppedItem.name}</p>}
      </div>
    </DndProvider>
    );
};

export default TaskForm;