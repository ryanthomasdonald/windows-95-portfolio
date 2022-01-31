import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import BaseLayout from './common/layout/BaseLayout';

ReactDOM.render(
  <React.StrictMode>
    <BaseLayout>
      <App />
    </BaseLayout>
  </React.StrictMode>,
  document.getElementById('root')
);
