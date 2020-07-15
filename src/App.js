import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        {/* This is the default route -> should be the last one (appears if no one before matches) */}
        <Route path="/">
          <Header/>
          <Home/>
        </Route>

        </Switch>        
      </div>
    </Router>
    
  );
}

export default App;


{/* We NEED React-Router  */}
  {/* localhost.com */}
  {/* localhost.com/checkout */}
  {/* localhost.com/login */}