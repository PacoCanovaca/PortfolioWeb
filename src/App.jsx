import { Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/structure/NavBar';
import Footer from './components/structure/Footer';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import CareerPath from './components/sections/CareerPath';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const App = () => {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/career-path" element={<CareerPath />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
