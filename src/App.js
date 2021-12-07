import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <>
    <section>
      <nav className="navbar">
        <div className="nav-div">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/calc">Calculator</Link>
          <Link className="link" to="/quotes">Quotes</Link>
        </div>
        <h1 className="header"> Math Magicians </h1>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/calc" element={<Calculator />} />

        <Route path="/quotes" element={<Quote />} />

      </Routes>
    </section>
  </>
);

export default App;
