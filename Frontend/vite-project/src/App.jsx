import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home/Home.jsx';
import Surveyform from './pages/SurveyForm/Surveyform.jsx';
import Navbar from './components/Header/Navbar.jsx'
import Login from './pages/Login/Login.jsx';

const App = () => {
  return (
    <div className='body'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/survey" element={<Surveyform />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
