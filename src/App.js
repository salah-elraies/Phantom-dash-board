import React from 'react';
import Person from './app/components/Person'
import LeftSide from './app/components/LeftSide';
import Forms from './app/components/Forms';

// import styled from 'styled-components';
// https://www.figma.com/file/O0kbcW6YOQ1NKTWcQFDqVB/solee?node-id=29%3A2
import './App.css';

function App() {
  return (
    <div className="App">
      <Person />
      <LeftSide />
      <Forms />
    </div>
  );
}

export default App;
 
