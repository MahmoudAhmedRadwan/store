import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import LogIn from './components/LogIn';
import Store from './components/Store';
import Cart from './components/Cart';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Route exact path='/' component={LogIn} />      
          <Route path='/store' component={Store} />
          <Route path='/cart' component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
