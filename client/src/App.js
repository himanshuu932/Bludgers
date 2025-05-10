import logo from './logo.svg';
import './App.css';
import ContactPage from './components/ContactUs';
import HeroPage from './components/Herosection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      
    <HeroPage/>
    <ContactPage/>
    <Footer/>
    </div>
  );
}

export default App;
