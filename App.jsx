import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Calculator } from './Calculator';

const App = () => (
  <Provider store={store}>
    <Calculator />
  </Provider>
);

export default App;
