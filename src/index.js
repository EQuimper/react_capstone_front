import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import './index.css';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Landing from '../src/components/Landing';
import GoalShow from '../src/components/GoalShow';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/goals/:id" component={GoalShow} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
