import './App.scss';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Parallax from './components/Parallax/Parallax.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
function App() {
  return (
    <div className="App">
      <section id='Homepage'>
          <Navbar/>
          <Hero/>
      </section>
      <section id='About'><About/></section> 
      <section id='Projects'><Parallax/></section>
      <Portfolio/>
      <section id='Contact'><Contact/></section> 
    </div>
  );
}

export default App;
