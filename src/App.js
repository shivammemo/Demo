import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateUser from './components/CreateUser';
import Render from './components/Render';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>

            <Route exact path='/' component={CreateUser} />
            <Route exact path='/view' component={Render} />
            <Route exact path='/edit-user/:id' component={EditUser} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
