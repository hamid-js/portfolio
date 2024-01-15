import Navbar from './features/nav/Navbar';
import HeaderCard from './features/articles/HiroCard';
import ResumeCard from './features/articles/ResumeCard';
import Testomonials from './features/articles/Testomonials';
import Skills from './features/skills/Skills';
import Works from './features/works/Works';
import Footer from './features/footer/Footer';
import { useState } from 'react';
import Terminal from './features/terminal/Terminal';

function App() {
  const [activeComponent, setActiveComponent] = useState('about');
  function showActiveComponent(component) {
    setActiveComponent(component);
  }

  const sections =
    ' lg:hidden lg:max-h-[38rem] lg:transition-all lg:duration-1000  lg:my-10  lg:rounded-xl ';
  const open =
    '  lg:!block   lg:!opacity-100 animated-element  ';
    // 
  return (
    <div className="flex-col text-stone-200  md:ml-7 md:flex  md:flex-row  md:items-start md:justify-center md:gap-20  lg:gap-0  lg:overflow-hidden  ">
      <nav>
        <Navbar showActiveComponent={showActiveComponent} />
      </nav>

      <main className="    md:mr-16 md:w-4/6 md:text-xl md:shadow-lg md:shadow-[var(--secondary-color-500)] lg:m-0 lg:mr-9 lg:flex lg:w-full lg:items-start lg:justify-between lg:gap-5 lg:shadow-none ">
        <div className=" lg:max-h-[43rem] lg:min-w-[28rem] xl:max-h-[43rem] xl:min-w-[35rem]  ">
          <HeaderCard />
        </div>

        <section className="lg:max-h-[35rem] lg:overflow-y-scroll lg:my-7 lg:rounded-xl xl:min-w-96  lg:shadow-lg lg:shadow-[var(--secondary-color-500)] lg:min-w-[25rem]  lg:border lg:border-[var(--secondary-color-500)] ">
          <div
            className={` ${sections} ${
              activeComponent === 'about' ? open : ''
            } `}
          >
            <ResumeCard />
            <Testomonials />
          </div>
          <div
            className={` ${sections} ${
              activeComponent === 'resume' ? open : ''
            } `}
          >
            <Skills />
            
          </div>
          <div
            className={` ${sections} ${
              activeComponent === 'projects' ? open : ''
            } `}
          >
            <Works />
          </div>


          <div
            className={` ${sections} ${
              activeComponent === 'terminal' ? open : ''
            } `}
          >
            <Terminal /> 
          </div>


          <div
            className={`  ${sections}  ${
              activeComponent === 'contact' ? open : ''
            } `}
          >
          <Footer />
           
          </div>
         
        </section>
      </main>
    </div>
  );
}

export default App;


