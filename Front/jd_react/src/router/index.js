import React from 'react';
import Home from '../page/Home/index';
import Login from '../page/Login/index';
import Personal from '../page/Personal/index';
import List from '../page/List/index';
import ListReady from '../page/ListReady/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router basename="JD">
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/list" element={<List />} />
        <Route path="/listReady" element={<ListReady />} />
      </Routes>
    </Router>
  );
}
export default App;
