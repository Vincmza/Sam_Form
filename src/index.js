import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//component
import Bravo from "./pages/Bravo"
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" exact element={<App />}/>
        <Route exact path="/success" exact element={<Bravo/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
