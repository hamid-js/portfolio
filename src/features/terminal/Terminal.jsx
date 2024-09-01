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
            <span className="font-bold text-[var(--secondary-color-500)]">
              help:
            </span>
            <span>List Of all Commands</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="font-bold text-[var(--secondary-color-500)]">
              about :
            </span>
            <span> About Me</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="font-bold text-[var(--secondary-color-500)]">
              skills :
            </span>
            <span>List Of My skills </span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="font-bold text-[var(--secondary-color-500)]">
              contact :
            </span>
            <span>Contact Me</span>
          </div>
          <div className="mt-2 flex w-full items-center justify-between  ">
            <span className="font-bold text-[var(--secondary-color-500)]">
              clear :
            </span>
            <span>Clear The Terminal`</span>
          </div>
        </div>
      ),
      about: `Hello, I'm Hamid Mohammadi, a seasoned web developer with 4 years of dedicated experience in web development and SEO. My coding skills include JavaScript (including ES6) with a focus on Next.js, React, Redux, Tailwind, and Git. I also specialize in key SEO techniques like keyword research, on-page optimization, and improving site speed, which help enhance website visibility and performance in search engines. From creating responsive designs to optimizing websites for better search rankings, my work demonstrates a commitment to delivering high-quality, user-friendly web experiences. I'm eager to contribute my skills and passion to the ever-evolving field of web development and SEO.`,
      contact: (
        <>
          <p className="mb-5 mt-10 font-semibold">You can reach me at :</p>
          <div className="[var(--secondary-color-600)] mb-7 flex  gap-4">
            <a href="mailto: hamid.reactjs@gmail.com" target="blank">
              Email
            </a>
            <a href="https://t.me/hamid_develop" target="blank">
              Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/hamidreza-mohamadi-a1357a249/"
              target="blank"
            >
              LinkedIn
            </a>
            <a target="blank" href="https://github.com/hamid-js">
              GitHub
            </a>
          </div>
        </>
      ),
      clear: '',
    };

    // Check if the input command exists, otherwise show an error
    const response = commands[input.toLowerCase()] || (
      <span className="text-sm  font-medium text-red-700">
        Command <span className="text-lg font-bold">'{input}'</span> not found.
        Type
        <span className="text-lg font-bold"> 'help' </span> for available
        commands.
      </span>
    );

    if (input.toLowerCase() === 'clear') return setOutput([]), setInput('');
    // Update the output with the input command and its response
    setOutput((prevOutput) => [...prevOutput, { command: input, response }]);

    // Clear the input field
    setInput('');
  };

  const text = `
  a passionate web developer and 
  skilled programmer 
  fluent in Persian and English. 
  Currently,I work as a freelancer,
  creating user-friendly
  and optimal websites and web apps.
  Also, I'm open to remote 
  and in-person positions. 
  You can reach me at:`;

  return (
    <div
      id="terminal"
      className=" lg:w-6/6  my-16 h-full w-full overflow-hidden rounded-md bg-[--color-black] p-5 text-[--primary-color-300] shadow-md md:m-0 lg:p-10  xl:min-w-[35rem]   2xl:min-w-[50rem] 2xl:py-32  "
    >
      <div className="w-4/4  m-auto pb-5   xl:text-xl 2xl:text-2xl  ">
        <span className=" font-bold text-[var(--secondary-color-500)]">
          {"Hi, I'm Hamid Mohamadi "}
        </span>

        <div className="relative mb-80 2xl:mb-96 ">
          <Typewriter text={text} maxWidth={400} wordDelay={50} />
        </div>
        <div className="mt-10  flex gap-4 font-bold text-[var(--secondary-color-500)]">
          <a href="mailto: hamid.reactjs@gmail.com">Email</a>
          <a href="https://t.me/hamid_develop">Telegram</a>
          <a href="https://www.linkedin.com/in/hamidreza-mohamadi-a1357a249/">
            LinkedIn
          </a>
          <a href="https://github.com/hamid-js">GitHub</a>
        </div>
      </div>
      <div className="max-w-md text-wrap 2xl:text-2xl  ">
        {output.map((entry, index) => (
          <div className="mt-5 w-full" key={index}>
            <span className="my-9 font-semibold text-[var(--secondary-color-500)] ">
              {`~/hamid>`}
            </span>
            {entry.command}
            <br />
            {entry.response && <span>{entry.response}</span>}
          </div>
        ))}
        <div>
          <span className="font-bold text-[var(--secondary-color-500)]">
            {'~/hamid>'}
          </span>
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
