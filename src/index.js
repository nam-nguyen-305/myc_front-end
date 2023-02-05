import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { publicRouter } from './router';
import DefaultLayout from '~/Component/layouts/DefaultLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
      ;
    </Router>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
