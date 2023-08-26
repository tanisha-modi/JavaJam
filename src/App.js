import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Contact from './Components/Contact';
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
     </Router>
     </div>
     
  );
}

export default App;
