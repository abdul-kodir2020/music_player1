import './App.css';
import HomePage from './components/HomePage';
import SongContextProvider from './providers/SongContextProvider';

function App() {
  return (
    <SongContextProvider>
      <div className="App">
        <div className='main rounded shadow'>
          <HomePage></HomePage>
        </div>
    </div>
    </SongContextProvider>
    
  );
}

export default App;
