import React, { useState, useEffect, useRef } from 'react';
import Typewriter from '../ui/Typewriter';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    // Automatically focus on the input when the component mounts
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnter = () => {
    // Simple commands and responses
    const commands = {
      help: (
        <div className="flex flex-col items-center justify-around">
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="text-purple-500">help: </span>
            <span>list all commands</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="text-purple-500"> about : </span>
            <span> about me</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="text-purple-500"> skills : </span>
            <span>list my skills</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="text-purple-500"> contact :</span>
            <span>contact me</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="text-purple-500"> clear : </span>
            <span>clear the terminal`</span>
          </div>
        </div>
      ),
      about: `I'm a frontend web developer and optimization enthusiast who respects writing clean, maintainable, and performant code while also paying attention to small details. Fluent in both Persian and English, I enjoy working with diverse clients and colleagues. While my primary goal is to consistently improve my skills and expand my knowledge, I currently work as a freelance web developer, not only crafting seamless user experiences but also fine-tuning website performance for optimal results. In addition, I take pleasure in sharing my expertise with fellow developers and have been willingly contributing to various developer communities on social media platforms for about a year now.`,
      skills: `Programming languages: JavaScript
      Key Frameworks and libraries: React js, CSS, redux, SCSS, Tailwind CSS, MUI
      Development tools: Git and GitHub, NPM, Visual Studio Code, Vite
      Soft skills: Love independent and comprehensive learning, Find joy in effective teamwork and helping others, Problem analysis and solving, Accurate, Perfectly arranged and on-time`,
      contact: (
        <div className="my-10 flex gap-4  text-purple-400">
          <a href="mailto: hamid.reactjs@gmail.com">Email</a>
          <a href="https://t.me/hamid_develop">Telegram</a>
          <a href="https://www.linkedin.com/in/hamidreza-mohamadi-a1357a249/">
            LinkedIn
          </a>
          <a href="https://github.com/hamid-js">GitHub</a>
        </div>
      ),
      clear: '',
    };

    // Check if the input command exists, otherwise show an error
    const response = commands[input.toLowerCase()] || (
      <span className="text-xl text-red-700">
        {`Command '${input}' not found. Type "help" for available commands.`}
      </span>
    );

    if (input === 'clear') return setOutput([]), setInput('');
    // Update the output with the input command and its response
    setOutput((prevOutput) => [...prevOutput, { command: input, response }]);

    // Clear the input field
    setInput('');
  };

  const text = ` 
  Currently,I work as a freelancer,
   creating user-friendly
  and optimal websites and web apps.
  Also, I'm open to remote 
  and in-person positions. 
  You can reach me at:`;

  return (
    <div
      id="terminal"
      className=" lg:w-6/6 xl:p-auto h-full w-full overflow-hidden rounded-md bg-[--color-black] p-10 text-[--primary-color-300] shadow-md 2xl:min-w-[50rem] "
    >
      <div className="w-4/4  m-auto pb-5  xl:text-xl ">
        <span className=" text-[var(--secondary-color-600)]">
          Hi, I'm Hamid Mohamadi
        </span>
        a passionate web developer and skilled programmer fluent in Persian and
        English.
        <Typewriter text={text} maxWidth={400} wordDelay={50} />
        <div></div>
        <div className="my-5 flex gap-4 text-purple-400">
        <a href="mailto: hamid.reactjs@gmail.com">Email</a>
          <a href="https://t.me/hamid_develop">Telegram</a>
          <a href="https://www.linkedin.com/in/hamidreza-mohamadi-a1357a249/">
            LinkedIn
          </a>
          <a href="https://github.com/hamid-js">GitHub</a>
        </div>
      </div>
      <div className="max-w-md text-wrap">
        {output.map((entry, index) => (
          <div className="mt-5" key={index}>
            <span className="my-9 text-green-600 ">{`~/hamid-mohamadi>`} </span>
            {entry.command}
            <br />
            {entry.response && <span>{entry.response}</span>}
          </div>
        ))}
        <div>
          <span className="text-green-500">{'~/hamid-mohamadi>'}</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && handleEnter()}
            className="my-7 ml-2 border-none bg-transparent text-[--primary-color-300] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
