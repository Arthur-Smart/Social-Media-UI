import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './components/context/Context';
import { VideoContextProvider } from './components/videocontext/VideoContext';

ReactDOM.render(
  <React.StrictMode>
  <ContextProvider> 
  <VideoContextProvider>
    <App />
    </VideoContextProvider>
    </ContextProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);


