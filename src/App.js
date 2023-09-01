import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { BrowserRouter as  Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
     <Navbar/>
     <Routes>
            <Route exact path="/" element={<Hero/>} />
            <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
     </Router>
     </div>
     
  );
}

export default App;
