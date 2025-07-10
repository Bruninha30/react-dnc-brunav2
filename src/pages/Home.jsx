

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer'; 
import ProjectsList from '../components/ProjectsList/ProjectsList';


import { useContext } from 'react';


// context
import { AppContext } from '../contexts/AppContext';

function Home() {

  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
        <div className="container">
        <Hero/>
        <ProjectsList/>
       </div>
      <Footer />
    </>
  );
}

export default Home;
