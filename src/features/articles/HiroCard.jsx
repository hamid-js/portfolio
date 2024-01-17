import {
  ImCloudDownload,
  ImCompass,
  ImGithub,
  ImInstagram,
  ImLinkedin,
  ImMail,
  ImTelegram,
  ImXing2,
} from 'react-icons/im';

export default function HiroCard() {
  return (
    <div className="mb-5 flex flex-col items-center justify-center rounded-b-xl bg-[var(--primary-color-800)] md:mt-2    md:gap-3 md:text-xl md:shadow-md md:shadow-[var(--secondary-color-500)]  lg:max-h-[42rem]  xl:max-h-[32rem] ">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="my-clip-path h-72 w-full object-cover  md:h-70 md:rounded-t-lg xl:h-44  "
      >
        <source src="/assets/card-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        className="z-10 mt-[-6rem] h-36 w-36 rounded-2xl border-[var(--color-black)] shadow-lg shadow-[var(--secondary-color-500)]"
        src="/assets/img-2.png"
        alt=""
      />
      <h1 className="mt-7 font-serif text-2xl capitalize  tracking-widest md:text-3xl">
        Hamid Mohammadi
      </h1>
      <h2 className="text-l font-serif  capitalize text-[var(--secondary-color-400)]">
        Front-End Devloper
      </h2>
      <div className="my-3 flex w-full cursor-pointer items-center justify-center gap-5 p-3 md:text-2xl ">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/hamid_develop_"
        >
          <ImInstagram />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hamid-js"
        >
          <ImGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto: hamid.reactjs@gmail.com"
        >
          <ImMail />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/hamid_develop"
        >
          <ImTelegram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/hamidreza-mohamadi-a1357a249/"
        >
          <ImLinkedin />
        </a>
      </div>
      <div className="flex w-full items-center justify-evenly border-t border-[var(--primary-color-700)] uppercase text-[var(--color-white)]">
        <a
          className="p-4"
          href="/assets/cv-hamid-mohammadi.pdf"
          download="cv-hamid-mohammadi.pdf"
        >
          <div className="flex items-center justify-center gap-2">
            <span>download cv</span>

            <span>
              <ImCloudDownload />
            </span>
          </div>
        </a>

        <span className="h-20 border-r-[1px] border-[var(--primary-color-700)] "></span>
        <a className="p-4" href="tel:09371355148">
          <div className="flex items-center justify-center gap-2">
            <span> contact me</span>

            <span>
              <ImCompass />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
