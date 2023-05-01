import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Podcast from './pages/Podcast';

// import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import HomeNavbar from './components/HomeNavbar.js'; // import the new HomeNavbar component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeNavbar />} /> 
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/books' element={<Books />} />
          <Route path='/podcast' element={<Podcast />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;