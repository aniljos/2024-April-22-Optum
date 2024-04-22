import React from 'react';
import Message from './components/Message';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'; 
import Counter from './components/Counter';


function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Message text='Hello World' color='blue' />} />
            <Route path="/counter" 
                      element={<Counter initValue={10} title='Counter'/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
