import Navbar from './features/nav/Navbar';
import HeaderCard from './features/articles/HiroCard';
import ResumeCard from './features/articles/ResumeCard';
import Testomonials from './features/articles/Testomonials';
import Skills from './features/skills/Skills';
import Works from './features/works/Works';
import Footer from './features/footer/Footer';

function App() {
  return (
    <div className="flex-col md:justify-center  text-stone-200 md:flex  md:items-start md:gap-3 md:ml-7 md:flex-row  ">
      <nav  className=" ">
        <Navbar />
      </nav>

      <main className="   md:mr-16 md:w-4/6 md:text-xl md:shadow-lg md:shadow-[var(--secondary-color-500)]  ">
        <HeaderCard />
        <ResumeCard />
        <Skills />
        <Works />
        <Testomonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
