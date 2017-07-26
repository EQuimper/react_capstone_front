import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import './index.css';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
  <Route path="/login" component={Login}></Route>
  <Route path="/" component={Home}></Route>
  </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();



