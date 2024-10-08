import { useState } from 'react';
import {
  // ImCloudDownload,
  ImCompass,
  ImGithub,
  // ImInstagram,
  // ImLinkedin,
  
  ImMail,
  ImPhone,
  ImTelegram,
} from 'react-icons/im';
import Loader from '../ui/Loader';
const hoverStyle =
  'hover:text-[--secondary-color-500] duration-300 hover:scale-125';

export default function HiroCard({ onLoad }) {
  const [isLoading, setIsloading] = useState(true);

  function handleLoad() {
    setIsloading(false);
  }

  return (
    <div className="mb-5 flex flex-col items-center justify-center rounded-b-xl bg-[var(--primary-color-800)] md:mt-2    md:gap-3 md:text-xl md:shadow-md md:shadow-[var(--secondary-color-500)]  ">
      {isLoading && <Loader />}
      <video
        onLoadedData={handleLoad}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="my-clip-path md:h-70 h-96 w-full  object-cover md:rounded-t-lg lg:h-[36vh]    "
      >
        <source src="/assets/card-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        className="z-10 -mt-20 sm:-mt-28  h-36 w-36  sm:h-44 sm:w-44 rounded-2xl border-[var(--color-black)] shadow-lg shadow-[var(--secondary-color-500)] lg:-mt-20 lg:h-28 lg:w-28 "
        src="/assets/m1m.jpg"
        alt=""
      />
      <h1 className="mt-5 font-serif text-2xl capitalize  tracking-widest md:text-2xl">
        Hamid Mohammadi
      </h1>
      <h2 className="font-serif text-lg  capitalize text-[var(--secondary-color-400)]">
        Web Devloper
      </h2>
      <div className="my-3 flex w-full cursor-pointer items-center justify-center gap-5 p-3 md:text-xl  ">
        {/* <a
          className={hoverStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/hamid_develop_"
        >
          <ImInstagram />
        </a> */}

        <a
          className={hoverStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hamid-js"
        >
          <ImGithub />
        </a>
        <a
          className={hoverStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: hamiddevelop78@gmail.com"
        >
          <ImMail />
        </a>
        <a
          className={hoverStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/hamid_develop"
        >
          <ImTelegram />
        </a>
        {/* <a
          className={hoverStyle}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/hamidreza-mohamadi-a1357a249/"
        >
          <ImLinkedin />
        </a> */}
      </div>
      <div className="flex w-full capitalize items-center justify-evenly border-t border-[var(--primary-color-700)]  text-[var(--color-white)] text-sm sm:text-lg lg:text-lg">
        <a
          className="p-2 sm:p-4 duration-300 hover:scale-110 hover:text-[--secondary-color-500]"
          // href="/assets/hamidmohamadi.pdf"
          // download="Hamid-Mohamadi-Frontend.pdf"
          rel="noopener noreferrer"
          href="https://t.me/hamid_develop"
          target="_blank"
        >
          <div className="flex  items-center justify-center gap-2">
            <span>send message</span>

            <span>
              <ImCompass />
            </span>
          </div>
        </a>

        <span className="h-12 border-r-[1px] border-[var(--primary-color-700)] "></span>
        <a
          className="p-2 sm:p-4 duration-300 hover:scale-110 hover:text-[--secondary-color-500]"
          href="tel:09371355148"
          target="_blank"
        >
          <div className="flex items-center justify-center gap-2">
            <span> contact me</span>

            <span>
              <ImPhone  />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
