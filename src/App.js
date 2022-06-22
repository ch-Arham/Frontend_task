import React from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserDetails from './Pages/UserDetails';
import ROI from './Pages/ROI';
import Home from './Pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roi" element={<ROI />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes> 
      </Router>
      <ToastContainer />
    </>
  )
}

export default App