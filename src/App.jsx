import { useState } from 'react';

import Navbar from './features/nav/Navbar';
import HiroCard from './features/articles/HiroCard';
import About from './features/articles/About';
import Testomonials from './features/articles/Testomonials';
import Skills from './features/skills/Skills';
import Projects from './features/projects/Projects';
import Footer from './features/footer/Footer';
import Terminal from './features/terminal/Terminal';
import MatrixBackground from './features/ui/MatrixAnimation';

const sections =
  ' lg:hidden lg:max-h-[38rem] lg:transition-all lg:duration-1000  lg:rounded-xl ';
const open = 'lg:!block lg:!opacity-100 animated-element';
function App() {
  const [activeComponent, setActiveComponent] = useState('about');
  function showActiveComponent(component) {
    setActiveComponent(component);
  }

  //
  return (
    <div className="z-[9999] flex-col  text-[--color-stone] md:ml-7  md:flex  md:flex-row md:items-start md:justify-center  md:gap-20  lg:gap-0  overflow-x-hidden   ">
      <MatrixBackground />
      <nav className="lg:mt-10 xl:ml-16 ">
        <Navbar showActiveComponent={showActiveComponent} />
      </nav>

      <main className=" md:mr-16 md:w-4/6 md:text-xl md:shadow-lg md:shadow-[var(--secondary-color-500)] lg:m-0 lg:mr-9 lg:flex lg:w-full lg:items-start lg:justify-between lg:gap-5 lg:shadow-none ">
        <div className=" lg:mt-6 lg:max-h-[33rem] lg:min-w-[26rem] xl:max-h-[33rem] xl:min-w-[28rem]  ">
          <HiroCard />
        </div>

        <section className="lg:my-7 lg:max-h-[35rem] lg:min-w-[25rem] lg:overflow-y-auto lg:rounded-xl  lg:border lg:border-[var(--secondary-color-500)] lg:shadow-lg  lg:shadow-[var(--secondary-color-500)] xl:mr-10  xl:max-h-[34rem] xl:min-w-80  2xl:mr-[20rem] ">
          <div
            className={` ${sections} ${
              activeComponent === 'about' ? open : ''
            } `}
          >
            <About />
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
  );
}

export default App;
