import logo from './logo.svg';
import './App.css';
import ContactPage from './components/ContactUs';
import BludgersHeroSection from './components/Herosection';
import AetherialDomainsPage from './components/Domain';
import AetherialTeamCarousel from './components/Team';
import Footer from './components/Footer';
import Navbar1123 from './components/Navbar';

function App() {
  return (
    <div className="App">
         <Navbar1123 />
    <BludgersHeroSection/>
    <AetherialDomainsPage/>
    <AetherialTeamCarousel/>
    <ContactPage/>
    <Footer />
   
    </div>
  );
}

export default App;
