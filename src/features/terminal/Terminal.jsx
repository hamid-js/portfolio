import { useState } from 'react';

function Terminal() {
  const [value, setValue] = useState('');
  const [incorrectValue, setincorrectValue ] = useState(false);
  function submitHanler(e) {
    e.preventDefault();
    if (value === 'help') {
      alert('dsd');
    
    }
    setincorrectValue(true)


    // setValue(' ');
    // alert("s")
  }
  return (
    <div className="h-full w-full bg-black p-32">
      <p>
        Hi, I'm
        <span className="text-[var(--secondary-color-600)]">
          Hamid Mohamadi
        </span>
        , a passionate web developer and skilled programmer fluent in Persian
        and English. Currently, I work as a freelancer, creating user-friendly
        and optimal websites and web apps. Also, I'm open to remote and
        in-person positions. You can reach me at:
      </p>
      <div className="mt-3 flex gap-4 text-[var(--secondary-color-600)]">
        <a href="">Email</a>
        <a href="">Telegram</a>
        <a href="">LinkedIn</a>
        <a href="">GitHub</a>
      </div>
      <form onSubmit={(e) => submitHanler(e)}>
        <label>
          {'~/hamid-mohamadi> '}
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-5 bg-inherit placeholder-lime-50 outline-none  focus:border-none"
            type="text"
          />

          { incorrectValue &&
            <p className="  text-red-500 ">
            The term '{value}' is not a command. See 'help'.
          </p>}
        </label>
      </form>
    </div>
  );
}

export default Terminal;
