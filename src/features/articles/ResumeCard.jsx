import { ImMagicWand, ImProfile } from 'react-icons/im';
import Title from '../ui/Title';

export default function ResumeCard() {
  return (
    <div
      id="about"
      className=" flex flex-col items-start justify-evenly gap-5  bg-[var(--primary-color-800)]    "
    >
      <Title
        icon={<ImProfile />}
        firstPart="About "
        secondPart="Me"
        border={'500'}
        padding={'7'}
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

      <div className="px-7 lg:px-10 xl:px-16 ">
        <p className="font-extralightligh text  pb-12 text-lg text-[var(--color-gray)] md:text-xl lg:text-2xl xl:text-3xl ">
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
        </p>
        <Title
          icon={<ImMagicWand />}
          firstPart="wordpress "
          secondPart="designer "
          border={'600'}
          padding="7"
          width="2/3"
        />
        <p className="m-3 p-3">
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
          troubleshooting, licensing, and updating hardware and software assets.
          A system administrator, or sysadmin, Data scientist, Systems engineer
          from USA, California. I have rich experience in managing,
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
