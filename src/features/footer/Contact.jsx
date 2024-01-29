import Title from '../ui/Title';

import { ImBubble2 } from 'react-icons/im';
import { SiMinutemailer } from 'react-icons/si';

export default function Contact() {
  const inputStyle = 
    'bg-inherit border-b  border-slate-500 outline-none focus:border-b-[var(--secondary-color-500)] focus:border-b-2 transition-all focus-within:placeholder:text-white w-full';
  return (
    <div id='contact' className="bg-inherit lg:p-4 " >
      <Title
        icon={<ImBubble2 />}
        firstPart="Contact "
        secondPart="Form"
        className='text-lg sm:text-xl sm:mt-5'
      
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
        <button className="mt-4 ml-[-10px] rounded-2xl border border-dotted border-[var(--secondary-color-500)] p-3 py-2 uppercase transition-all duration-500 hover:text-[var(--secondary-color-500)] hover:animate-bounce">
          Send Message <SiMinutemailer className="mb-1 inline text-2xl " />
        </button>
      </form>
    </div>
  );
}
