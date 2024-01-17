import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';
import Typewriter from '../ui/Typewriter';
const text = `A system administrator, or sysadmin,
 Data scientist, Systems engineer
from USA, California. I have rich
 experience in managing,
troubleshooting, licensing,
and updating hardware and software assets.
A system administrator,
 or sysadmin, Data scientist, Systems engineer
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
        heading="lg"
      />
      <Title
        icon={<ImMagicWand />}
        firstPart="front-end "
        secondPart="debeloper "
        border={'600'}
        padding="3"
        width="2/3"
      />

      <div className="px-7 text-[var(--color-gray)] lg:px-10 xl:px-16 ">
        <div className="font-extralightligh  pb-12 text-lg  md:text-xl ">
        </div>
        <Title
          icon={<ImMagicWand />}
          firstPart="wordpress "
          secondPart="designer "
          border={'600'}
          padding="7"
          width="2/3"
        />

        <p className="m-3 p-3 md:text-xl">
      

          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
        
        
        </p>
      </div>
    </div>
  );
}
