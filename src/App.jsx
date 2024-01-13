import Navbar from './features/nav/Navbar';
import HeaderCard from './features/articles/HiroCard';
import ResumeCard from './features/articles/ResumeCard';
import Testomonials from './features/articles/Testomonials';
import Skills from './features/skills/Skills';
import Works from './features/works/Works';
import Footer from './features/footer/Footer';

function App() {
  return (
    <main className="text-stone-200 md:flex md:flex-col md:items-center md:justify-center  md:w-3/4 md:m-auto md:mr-16 md:gap-3 md:text-xl md:shadow-lg md:shadow-green-500 "  >
      <Navbar />
      <HeaderCard />
      <ResumeCard />
      <Skills />
      <Works />
      <Testomonials />
      <Footer />
    </main>
  );
}

export default App;
