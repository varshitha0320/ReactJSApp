import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Post from './Components/Post'; // Dynamic Post Page
import NotFound from './Components/Not Found'; // 404 Page
import "./style.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<Post />} /> {/* Dynamic Post Page */}
            <Route path="*" element={<NotFound />} /> {/* 404 Page */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
