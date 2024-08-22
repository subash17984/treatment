import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/component/Login';
import { Select_treatment } from './component/treatment/Select_treatment';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/treatment" element={<Select_treatment />} />
      </Routes>
    </Router>
  );
}

export default App;
