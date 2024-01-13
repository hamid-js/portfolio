import Title from '../ui/Title';

import { ImBubble2 } from 'react-icons/im';
import { SiMinutemailer } from 'react-icons/si';

export default function Contact() {
  const inputStyle =
    'bg-inherit border-b  border-slate-500 outline-none focus:border-b-[var(--secondary-color-500)] focus:border-b-2 transition-all focus-within:placeholder:text-white w-full';
  return (
    <div className="bg-inherit ">
      <Title
        icon={<ImBubble2 />}
        firstPart="Contact "
        secondPart="Form"
        border={500}
        width="full"
      />

      <form
        className="flex flex-col items-start justify-center gap-5 p-7 "
        action=""
      >
        <input className={inputStyle} type="text" placeholder="Full Name" />
        <input className={inputStyle} type="text" placeholder="Email Address" />
        <input
          className={inputStyle}
          type="textarea"
          placeholder="Your Message"
        />
        <button className="my-4 ml-[-10px] rounded-2xl border border-dotted border-[var(--secondary-color-500)] p-3 py-2 uppercase transition-all duration-500 hover:text-[var(--secondary-color-500)]">
          Send Message <SiMinutemailer className="mb-1 inline text-2xl " />
        </button>
      </form>
    </div>
  );
}
