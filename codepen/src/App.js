
import './App.css';
import Home from './components/Home';
import DataProvider from './context/dataprovide';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
