import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import MyWork from './Components/MyWork/MyWork.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import TermOfService from './pages/TermOfService.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <div>
        <Routes>
        <Route path="/terms-of-service" element={<TermOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
     
      </div>
    </>
  )
}

export default App
