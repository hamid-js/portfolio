// import React from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="section1" smooth={true} duration={500}>
//             Section 1
//           </Link>
//         </li>
//         <li>
//           <Link to="section2" smooth={true} duration={500}>
//             Section 2
//           </Link>
//         </li>
//         <li>
//           <Link to="section3" smooth={true} duration={500}>
//             Section 3
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <section id="section1">
//         <h2>Section 1</h2>
//         <p>This is section 1 content.</p>
//       </section>

//       <section id="section2">
//         <h2>Section 2</h2>
//         <p>This is section 2 content.</p>
//       </section>

//       <section id="section3">
//         <h2>Section 3</h2>
//         <p>This is section 3 content.</p>
//       </section>
//     </div>
//   );
// };


const Guide = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('section1')}>Section 1</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('section2')}>Section 2</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('section3')}>Section 3</button>
          </li>
        </ul>
      </nav>

      <section id="section1">
        <h2>Section 1</h2>
        <p>This is section 1 content.</p>
      </section>

      <section id="section2">
        <h2>Section 2</h2>
        <p>This is section 2 content.</p>
      </section>

      <section id="section3">
        <h2>Section 3</h2>
        <p>This is section 3 content.</p>
      </section>
    </div>
  );
};
// import "./Guide.css";

// import React, { useState } from 'react';

// const Guide = () => {
//   const [activeSection, setActiveSection] = useState(null);

//   const handleScrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     const sectionRef = document.getElementById(sectionId);
//     if (sectionRef) {
//       sectionRef.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <nav className='mb-[100rem]'>
//         <ul>
//           <li>
//             <button onClick={() => handleScrollToSection('section1')}>
//               Section 1
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleScrollToSection('section2')}>
//               Section 2
//             </button>
//           </li>
//           <li>
//             <button onClick={() => handleScrollToSection('section3')}>
//               Section 3
//             </button>
//           </li>
//         </ul>
//       </nav>

//       <section
//         id="section1"
//         className={activeSection === 'section1' ? 'active' : ''}
//       >
//         <h2>Section 1</h2>
//         <p>This is section 1 content.</p>
//       </section>

//       <section
//         id="section2"
//         className={activeSection === 'section2' ? 'active' : ''}
//       >
//         <h2>Section 2</h2>
//         <p>This is section 2 content.</p>
//       </section>

//       <section
//         id="section3"
//         className={activeSection === 'section3' ? 'active' : ''}
//       >
//         <h2>Section 3</h2>
//         <p>This is section 3 content.</p>
//       </section>
//     </div>
//   );
// };
export default Guide;
