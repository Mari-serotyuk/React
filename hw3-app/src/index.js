import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Task1/App';
import App2 from './components/Task2/App2';
import Square from './components/Task3/Square';
import VideoPlayer from './components/Task3/VideoPlayer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App />
      <App2 />
      <Square/> */}
      <VideoPlayer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
