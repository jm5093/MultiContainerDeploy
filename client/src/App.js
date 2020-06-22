import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FillerPage from './FillerPage';
import Fib from './Fib';


function App() {
  return (
    <Router>
      

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link>
          <Link to="/fillerpage">Filler Page</Link>
        </header>
        <div>
          <Route exact Path="/" component={Fib} />
          <Route exact Path="/fillerpage" component={FillerPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
