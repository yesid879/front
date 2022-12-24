import logo from './logo.svg';
import './App.css';

// importamos rutas
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './configuracion/rutas';
import CompFooter from './configuracion/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      </header>
    <Router>

    <Rutas/>
    <CompFooter/>


    </Router>
    </div>
  );
}

export default App;
