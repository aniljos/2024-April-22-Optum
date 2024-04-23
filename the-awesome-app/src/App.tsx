import React, { useContext } from 'react';
import Message from './components/Message';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'; 
import Counter from './components/Counter';
import Login from './components/Login';
import GadgetStore from './components/GadgetStore';
import ViewCart from './components/ViewCart';
import ListProducts from './components/ListProducts';
import ZuGadgetStore from './components/ZuGadgetStore';
import ZuViewCart from './components/ZuViewCart';
import { AppThemeContext } from './context/AppThemeContext';


function App() {

  const theme = useContext(AppThemeContext);

  function handleChangeTheme() {
    
    if(theme.mode === 'dark') {
      theme.dispatch!({type: 'SET_LIGHT'});
    } else {
      theme.dispatch!({type: 'SET_DARK'});
    }
    
  }

  return (
    <Router>
      <div className="container-fluid">
        <nav className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
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
              <li className="nav-item">
                <Link className="nav-link" to="/gadgets">Gadgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">View Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/zugadgets">ZuGadgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/zucart">ZuView Cart</Link>
              </li>
              <li>
                <button className='btn btn-warning' onClick={handleChangeTheme}>Switch Theme</button>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Message text='Hello World' color='blue' />} />
            <Route path="/counter" 
                      element={<Counter initValue={10} title='Counter'/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/gadgets" element={<GadgetStore/>}/>
            <Route path="/cart" element={<ViewCart/>}/>
            <Route path="/products" element={<ListProducts/>}/>

            <Route path="/zugadgets" element={<ZuGadgetStore/>}/>
            <Route path="/zucart" element={<ZuViewCart/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
