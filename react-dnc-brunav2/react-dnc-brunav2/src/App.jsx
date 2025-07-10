import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar o contexto corretamente
import { AppContext } from './contexts/AppContext';

// Páginas e componentes
import Home from './pages/Home';
import About from './pages/About';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

// Utils
import ScrollToTop from './utils/ScrollTop';

function App() {
  const appContext = useContext(AppContext);

  if (appContext.loading) {
    return <LoadingSpinner/>;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
