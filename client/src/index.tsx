import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import App from './App';
import BaseLayout from './common/layout/BaseLayout';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BaseLayout>
          <App />
        </BaseLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
