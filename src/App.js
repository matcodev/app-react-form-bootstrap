import React from 'react';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  return (

    <div className="container pt-4">
      <div className="row">
        <div className='col-4'>
          <Form />
        </div>
        <div className='col-8'>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
