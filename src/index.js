import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Home from '../src/components/Home';
// import Login from '../src/components/Login';
import Landing from './components/Landing';
// import GoalShow from '../src/components/GoalShow';
// import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import registerServiceWorker from './registerServiceWorker';
// import App from './App';
// import Register from './components/Register';
import store from './store';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/landing" component={Landing} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
