import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

function App() {

  const taskData = [
    { id: 1, name: 'Roberto', description: 'Cocinar' },
    { id: 2, name: 'Camila', description: 'Barrer' },
    { id: 3, name: 'Andres', description: 'Codear' }
  ]
  const [task, setTask] = useState(taskData);

  const addTask = (newTask) => {
    newTask.id = task.length > 0 ? (task[task.length - 1].id) + 1 : 1;
    setTask([
      ...task,
      newTask
    ])
  }
  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id))
  }

  return (

    <div className="container pt-4">
      <div className="row">
        <div className='col-4'>
          <Form
          addTask={addTask} 
          />
        </div>
        <div className='col-8'>
          <Table 
          task={task}
          deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
