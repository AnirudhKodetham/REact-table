import React from 'react';
import TableComponent from './TableComponent';
import Modal from 'react-modal';
import './App.css';


Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <TableComponent />
    </div>
  );
}

export default App;

