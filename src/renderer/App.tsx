import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}
