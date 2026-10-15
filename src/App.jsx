import { useState } from 'react';
import './index.css';
import NavBar from './components/structure/NavBar';
import Footer from './components/structure/Footer';

const App = () => {
  const [section, setSection] = useState("Sobre mí");

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
