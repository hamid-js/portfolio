import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';
import Typewriter from '../ui/Typewriter';
const text = `A system administrator,
 or sysadmin,
 Data scientist, Systems engineer
from USA, California. I have rich
 experience in managing,
troubleshooting, licensing,
and updating hardware and software assets. engineer
A system administrator,
 or sysadmin,
  Data scientist, Systems engineer
from USA, California. 
I have rich experience in managing,
troubleshooting, licensing, and updating 
hardware and software assets.

`;
export default function ResumeCard() {
  return (
    <div
      id="about"
      className=" flex flex-col items-start justify-evenly gap-5  bg-[var(--primary-color-800)] "
    >
      <Title
        icon={<ImProfile />}
        firstPart="About "
        secondPart="Me"
      
      />
      <Title
        icon={<ImMagicWand />}
        firstPart="front-end "
        secondPart="debeloper "
         className='!text-lg'
        

      />

      <div className="px-7 text-[var(--color-gray)] lg:px-10 xl:px-8 ">
        <div className="font-extralightligh  pb-12 text-lg  md:text-xl ">
          <Typewriter text={text} maxWidth={250} wordDelay={50} />
        </div>
        <Title
          icon={<ImMagicWand />}
          firstPart="wordpress "
          secondPart="designer "
          className='!text-lg'

        />

        <p className="font-extralightligh  pb-12 text-lg  md:text-xl mt-5">
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
        </p>
      </div>
    </div>
  );
}
