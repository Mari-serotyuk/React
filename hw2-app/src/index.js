import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Task1/App';
import Form from './components/Task2/Form';
import LifeCycle from './components/Task3/LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Form />
    <LifeCycle />
  </React.StrictMode>
);


