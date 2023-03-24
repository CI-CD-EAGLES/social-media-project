// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoggedIn from './NavBar/LoggedIn';
import Home from './Component/Home';
import { About } from './Component/About';
import { Blog } from './Component/Blog';
import { Products } from './Component/Products';
import { Pricing } from './Component/Pricing';

function App() {
  return (
   <>
    <BrowserRouter>
      <LoggedIn />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
