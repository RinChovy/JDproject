import React from 'react';
import Home from '../page/Home/index';
import Login from '../page/Login/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router basename="JD">
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
