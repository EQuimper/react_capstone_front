import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import './index.css';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import PrivateRoute from './components/PrivateRoute';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
  <Route path="/login" component={Login}></Route>
  <PrivateRoute path="/" component={Home}></PrivateRoute>
  </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();



