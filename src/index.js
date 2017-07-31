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
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
  <Route path="/login" component={Login}></Route>
  <Route path="/goals/:id" component={GoalShow}></Route>
  <PrivateRoute path="/" component={Home}></PrivateRoute>
  </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();



