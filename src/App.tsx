import React from 'react';
import './styles/global.css'
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

function App() {
  return (
    <>
    <Header />
    
    <Tasks />
    </>
  );
}

export default App;
