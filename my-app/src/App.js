import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Books from './pages/Books';
import Podcast from './pages/Podcast';

import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/books' element={<Books />} />
          <Route path='/podcasts' element={<Podcast />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
