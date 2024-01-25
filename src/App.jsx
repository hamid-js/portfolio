import { useEffect, useState } from 'react';

import Navbar from './features/nav/Navbar';
import HiroCard from './features/hiro/HiroCard';
import About from './features/about/About';
import Skills from './features/skills/Skills';
import Projects from './features/projects/Projects';
import Footer from './features/footer/Footer';
import Terminal from './features/terminal/Terminal';
import MatrixBackground from './features/ui/MatrixAnimation';
import MouseMover from './features/ui/MouseMover';
import Loader from './features/ui/Loader';

const sections =
  'lg:hidden lg:max-h-[38rem] lg:transition-all lg:duration-1000 lg:rounded-xl ';
const open = 'lg:!block lg:!opacity-100 animated-element';

function App() {
  const [activeComponent, setActiveComponent] = useState('about');


  function showActiveComponent(component) {
    setActiveComponent(component);
  }

  //
  return (
    <>
      <div className="z-[9999] flex-col overflow-x-hidden text-[--color-stone]  md:ml-7 md:flex md:flex-row md:items-start md:justify-center md:gap-5">


        <MouseMover />
        <MatrixBackground />
        <nav className=" fixed z-20 w-full transition-all duration-500 md:static md:mt-5 md:w-14 md:gap-0 lg:mt-16 lg:h-[30rem] lg:w-16 xl:ml-16 xl:w-16 2xl:w-20">
          <Navbar showActiveComponent={showActiveComponent} />
        </nav>
        <main className="  md:mr-16 md:w-4/6 md:text-xl md:shadow-lg md:shadow-[var(--secondary-color-500)] lg:m-0 lg:mr-9 lg:flex lg:w-full lg:items-start lg:justify-between lg:gap-5 lg:shadow-none ">
          {/* lg:max-h-[33rem] */}
          <div className=" lg:mt-4   lg:min-h-[90vh]  lg:min-w-[38vw] xl:lg:min-w-[36vw]  2xl:min-w-[31vw]  ">
            <HiroCard  />
          </div>

          <section className="lg:my-5 lg:max-h-[93vh] lg:min-w-[27rem] lg:overflow-y-auto lg:rounded-xl  lg:border lg:border-[var(--secondary-color-500)] lg:shadow-lg  lg:shadow-[var(--secondary-color-500)] xl:mr-10   xl:min-w-80 ">
            <div
              className={` ${sections} ${
                activeComponent === 'about' ? open : ''
              } `}
            >
              <About />
              {/* <Testomonials /> */}
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
              }  `}
            >
              <Projects />
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
    </>
  );
}

export default App;
