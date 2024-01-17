import { useState } from 'react';

import Navbar from './features/nav/Navbar';
import HeaderCard from './features/articles/HiroCard';
import ResumeCard from './features/articles/ResumeCard';
import Testomonials from './features/articles/Testomonials';
import Skills from './features/skills/Skills';
import Works from './features/works/Works';
import Footer from './features/footer/Footer';
import Terminal from './features/terminal/Terminal';
import MouseFollower from './features/ui/MouseFollower';
import MatrixBackground from './features/ui/MatrixAnimation';

function App() {
  const [activeComponent, setActiveComponent] = useState('about');
  function showActiveComponent(component) {
    setActiveComponent(component);
  }

  const sections =
    ' lg:hidden lg:max-h-[38rem] lg:transition-all lg:duration-1000  lg:rounded-xl ';
  const open = '  lg:!block   lg:!opacity-100 animated-element  ';
  //
  return (
    <div className="z-[9999] flex-col  text-stone-200 md:ml-7  md:flex  md:flex-row md:items-start md:justify-center  md:gap-20  lg:gap-0  lg:overflow-hidden  ">
<MatrixBackground />
      {/* <MouseFollower /> */}
      <nav>
        <Navbar showActiveComponent={showActiveComponent} />
      </nav>

      <main className="    md:mr-16 md:w-4/6 md:text-xl md:shadow-lg md:shadow-[var(--secondary-color-500)] lg:m-0 lg:mr-9 lg:flex lg:w-full lg:items-start lg:justify-between lg:gap-5 lg:shadow-none ">
        <div className=" lg:max-h-[40rem] lg:min-w-[28rem] xl:mt-10 xl:max-h-[33rem] xl:min-w-[30rem] ">
          <HeaderCard />
        </div>

        <section className="lg:my-7 lg:max-h-[35rem] lg:min-w-[25rem] lg:overflow-y-scroll lg:rounded-xl  lg:border lg:border-[var(--secondary-color-500)] lg:shadow-lg  lg:shadow-[var(--secondary-color-500)] xl:mr-10 xl:mt-20 xl:max-h-[28rem] xl:min-w-80  2xl:xl:mr-[25rem] ">
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
