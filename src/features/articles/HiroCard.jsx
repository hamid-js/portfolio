import {
  ImCloudDownload,
  ImCompass,
  ImGithub,
  ImInstagram,
  ImLinkedin,
  ImTelegram,
  ImXing2,
} from 'react-icons/im';

export default function HiroCard() {
  return (
    <div className="mb-5 flex flex-col items-center justify-center rounded-b-xl bg-[var(--primary-color-800)] md:mt-2    md:gap-3 md:text-xl md:shadow-md md:shadow-[var(--secondary-color-500)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="my-clip-path h-72 w-full object-cover  md:h-80 md:rounded-t-lg  "
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
      <div className="my-3 flex w-full items-center justify-center gap-5 p-3 md:text-2xl ">
        <span>
          <ImGithub />
        </span>
        <span>
          <ImLinkedin />
        </span>
        <span>
          <ImXing2 />
        </span>
        <span>
          <ImInstagram />
        </span>
        <span>
          <ImTelegram />
        </span>
      </div>
      <div className="flex w-full items-center justify-evenly border-t border-[var(--primary-color-700)] uppercase text-[var(--color-white)]">
        <div className="flex items-center justify-center gap-2">
          <a href="#">download cv</a>
          <span>
            <ImCloudDownload />
          </span>
        </div>
        <span className="h-20 border-r-[1px] border-[var(--primary-color-700)] "></span>
        <div className="flex items-center justify-center gap-2">
          <a href="#">contact me</a>
          <span>
            <ImCompass />
          </span>
        </div>
      </div>
    </div>
  );
}
