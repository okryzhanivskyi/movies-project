import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import 'regenerator-runtime/runtime'

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));