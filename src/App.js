import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/index';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default App;
