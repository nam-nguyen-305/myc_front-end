import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const App = ()=>{
  return <div className="App">

         </div>;
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
