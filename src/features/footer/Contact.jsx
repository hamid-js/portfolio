import { useState } from 'react';
import Title from '../ui/Title';

import { ImBubble2 } from 'react-icons/im';
import { SiMinutemailer } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.email && formData.message && formData.name) {
      setTimeout(function () {
        alert('Your message successfuly sent✅ Thanks for your message❤️');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, 2000);
    } else {
      setTimeout(function () {
        alert('Please complete the form!');
      }, 2000);
    }
  }

  const inputStyle =
    'bg-inherit border-b  border-slate-500 outline-none focus:border-b-[var(--secondary-color-500)] focus:border-b-2 transition-all focus-within:placeholder:text-white w-full';
  return (
    <div id="contact" className="bg-inherit lg:p-4 ">
      <Title
        icon={<ImBubble2 />}
        firstPart="Contact "
        secondPart="Form"
        className="text-lg sm:mt-5 sm:text-xl"
      />

      <form
        className="flex flex-col items-start justify-center gap-5 p-7 "
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          value={formData.name}
          className={inputStyle}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
          type="email"
          placeholder="Email Address"
        />
        <input
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={inputStyle}
          type="textarea"
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="ml-[-10px] mt-4 rounded-2xl border border-dotted border-[var(--secondary-color-500)] p-3 py-2 uppercase transition-all duration-500 hover:animate-bounce hover:text-[var(--secondary-color-500)]"
        >
          Send Message <SiMinutemailer className="mb-1 inline text-2xl " />
        </button>
      </form>
    </div>
  );
}
