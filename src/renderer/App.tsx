/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Auth from './utils/Auth';
import SignUpPage from './pages/signup';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkLoggedIn = async () => {
    const loggedIn = await Auth.isLoggedIn();
    setIsLoggedIn(loggedIn);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <Router>
      <ToastContainer theme="colored" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Routes>
    </Router>
  );
}
