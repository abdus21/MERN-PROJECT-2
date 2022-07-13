import { useState } from 'react';
import MsgContext from './contexts/MsgContext';
import './App.css';
import Navbar from './components/header/Navb';
import Home from './components/pages/Home';
import Footer from './components/footer/Footer';
import ServicePage from './components/pages/service/ServicePage';
import { Routes, Route } from 'react-router-dom';
import CourcPage from './components/pages/CourcPage/CourcPage';
import PortfolioPage from './components/pages/PortfolioPage/PortfolioPage';
import ContactPage from './components/pages/contactPage/ContactPage';






function App() {
  const [msg ,setMsg] = useState('')
  return (
    <>
     <MsgContext.Provider value={{msg,setMsg}}>
             <Navbar />
             <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Service' element={<ServicePage />} />
                <Route path='/cources' element={<CourcPage />} />
                <Route path='/portfolio' element={<PortfolioPage />} />
                <Route path='/contact' element={<ContactPage />} />
             </Routes>
             <Footer />
             
     </MsgContext.Provider>
    </>
  );
}

export default App;
