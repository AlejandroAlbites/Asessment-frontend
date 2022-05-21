import axios from 'axios';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <nav className="Nav__navigation-options">
        <Link className="link__navigation-options" to="/">
          Home
        </Link>
        <Link className="link__navigation-options" to="/about">
          About
        </Link>
        <Link className="link__navigation-options" to="/productDetail">
          Product Detail
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
