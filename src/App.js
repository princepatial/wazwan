import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';
import About from  './Pages/About'
import Catering from './Pages/Catering';
import ContactUs from './Pages/ContactUs';
import OurMenus from './Pages/OurMenus'
import MenuItem from './Pages/MenuItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/our-menus" element={<OurMenus />} />
        <Route path="/menu/*" element={<OurMenus />} />
        <Route path="/menu-item/:id" element={<MenuItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;