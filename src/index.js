import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='/goit-react-hw-05-movies/'>
      <App />
    </Router>
  </React.StrictMode>
);
