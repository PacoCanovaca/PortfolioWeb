import { Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import SiteHeader from './components/structure/Header';
import SiteFooter from './components/structure/Footer';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import CareerPath from './components/sections/CareerPath';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import NotFound from './components/sections/NotFound';

const App = () => {

  return (
    <div>
      <SiteHeader />
      <main className="mt-[40px]">
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/career-path" element={<CareerPath />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
