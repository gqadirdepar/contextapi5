import { useState } from 'react';
import './App.css';
import Countercontext from './countercontext';
import Parent from './parent'
function App() {
  let CountState= useState(40)
  return (
    <div >
      <Countercontext.Provider value={CountState}>
        <Parent />
      </Countercontext.Provider>

    </div>
  );
}

export default App;
