import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';

export default function ResumeCard() {
  return (
    <div className=" flex flex-col items-start justify-evenly gap-5  bg-[var(--primary-color-2)]    ">
      <Title
        icon={<ImProfile />}
        firstPart="About "
        secondPart="Me"
        border={"500"}
        size="2xl"
        padding={"7"}
       
      />
      <Title
        icon={<ImMagicWand />}
        firstPart="front-end "
        secondPart="debeloper "
        border={"600"}
        size="lg"
        padding={"3"}
        width="2/3"
      />

      <div className="px-7">
        <p className="font-extralightligh pb-12  text-lg text-gray-400 ">
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
        </p>
      </div>
    </div>
  );
}
