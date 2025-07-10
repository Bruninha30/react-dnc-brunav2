import AboutText from '../components/AboutText/AboutText';
import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'; 
import { useContext } from 'react';

// context
import { AppContext } from '../contexts/AppContext';

function About() {
  const appContext = useContext(AppContext);

  return (
    <>
      <Header />
      <Banner title= {appContext.languages[appContext.language].menu.about} image="about.jpg" />
      <div className="container">
        <AboutText />
      </div>
      <Footer />
    </>
  );
}

export default About;
