import './App.css';
import Navbar from './components/Navbar';
import Front from './components/Front';
import Skillset from './components/Skillset';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = ()  => {
  return (
    <>
      <div className="flex relative flex-col min-h-screen">
         <Navbar />
          <div className="md:mx-25 md:px-10 m-5"> 
            <Front />
            <Skillset />
            <Project />
            <Contact />
          </div>
        <Footer />
      </div>
    </>
  );
}

export default App;