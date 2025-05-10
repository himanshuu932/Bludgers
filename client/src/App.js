import logo from './logo.svg';
import './App.css';
import ContactPage from './components/ContactUs';
import HeroPage from './components/Herosection';
import Footer from './components/Footer';
import AetherialTeamPage from './components/Team';
import AetherialDomainsPage from './components/Domain';
function App() {
  return (
    <div className="App">
      
    <HeroPage/>
    <AetherialDomainsPage/>
    <AetherialTeamPage/>
    <ContactPage/>
    <Footer/>
    </div>
  );
}

export default App;
