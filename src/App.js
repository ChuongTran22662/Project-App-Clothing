import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {

  const HashPage = () => (
    <div>
      <h1> HAST PAGE</h1>
    </div>
  )

  const WomenPage = () => (
    <div>
      <h1> Women page</h1>
    </div>
  )

  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} /> 
      </Switch>
    </div>
  );
}

export default App;
