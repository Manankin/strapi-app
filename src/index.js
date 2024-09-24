import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Apply from './pages/apply';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="apply" element={<Apply />} />
        {/* <Route path="test" elemet={<Test />} /> */}
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();