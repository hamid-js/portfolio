import Title from '../ui/Title';
import MiniSkill from '../ui/MiniSkill';
import SkillItem from './SkillItem';

import { ImStatsBars2, ImTerminal, ImTrophy } from 'react-icons/im';

export default function Skills() {
  return (
    <div
      id="resume"
      className="mb-5 flex flex-col items-start justify-evenly bg-[var(--primary-color-800)]  px-5  pb-12 lg:mb-0   "
    >
      <Title
        icon={<ImStatsBars2 />}
        firstPart="Ski"
        secondPart="lls"
        border={'600'}
        heading="big"
      />

      <div
        className="my-7 w-full rounded-lg bg-[var(--primary-color-700)]
py-5"
      >
        <Title
          icon={<ImTerminal />}
          firstPart="cod"
          secondPart="ing"
          border={'600'}
          width="1/2"
          padding={'7'}
          heading={'lg'}
        />

        <div className=" text-sm sm:text-lg  w-full px-4 sm:p-6  text-[--color-white]">
          <SkillItem title="HTML 5 , CSS 3" />
          <SkillItem title="Tailwind CSS" />
          <SkillItem title="java script" className="w-4/5" percentage={'80'} />
          <SkillItem title="React js"  />
          <SkillItem title="git , github" />
          <SkillItem title="redux " className="w-4/5" percentage={'80'} />
          <SkillItem title="responsive " />
          <SkillItem title="restful api " />
        </div>

        <Title
          icon={<ImTrophy />}
          firstPart="oth"
          secondPart="er"
          
        />
        <div className="flex flex-wrap items-center justify-center  sm:p-5 text-xs sm:text-sm  ">
          <MiniSkill text="RESTful API" />
          <MiniSkill text="context api" />
          <MiniSkill text="scss" />
          <MiniSkill text="mui" />
          <MiniSkill text="bootstrap" />
          <MiniSkill text="Responsive" />
          <MiniSkill text="wordpress" />
          <MiniSkill text="jquery" />
          <MiniSkill text="seo" />
        </div>
      </div>
    </div>
  );
}
