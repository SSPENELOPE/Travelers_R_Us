import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
