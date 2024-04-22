import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Message text="Hello Typescript" color="blue" 
                          onClose={() => console.log('closing')}/>
         <Message text="Hello Anil"/>
         <Counter initValue={5} title='Counter 1'/>
         <Counter initValue={10} title='Counter 2'/>

      </main>
    </div>
  );
}

export default App;
