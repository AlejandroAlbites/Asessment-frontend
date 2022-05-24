import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <nav className="Nav__navigation-options">
        <Link className="link__navigation-option-home" to="/">
          Home
        </Link>
        <Link className="link__navigation-option-about" to="/about">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
