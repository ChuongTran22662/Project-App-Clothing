import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

function App() {

  const HashPage = () => (
    <div>
      <h1> HAST PAGE</h1>
    </div>
  )

  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HashPage} />
      </Switch>
    </div>
  );
}

export default App;
