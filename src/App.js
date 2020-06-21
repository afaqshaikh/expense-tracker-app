import React from 'react';
import './App.css';
import Parent from './Parent';
import {TransactionProvider} from './transContext'


function App() {
  return (
    <TransactionProvider>
      <Parent />
    </TransactionProvider>
  );
}

export default App;
