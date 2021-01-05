import './App.css';
import Countercontext from './countercontext';
import Parent from './parent'
function App() {
  return (
    <div >
      <Countercontext.Provider value={10}>
        <Parent />
      </Countercontext.Provider>

    </div>
  );
}

export default App;
