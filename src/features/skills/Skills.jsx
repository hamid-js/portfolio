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
          <SkillItem title="java script, ES6, ES7, ..." />
          <SkillItem title="React js , Redux" />
          <SkillItem title="Next js"  />
          <SkillItem title="RESTful API " />
          <SkillItem title="HTML 5 , CSS 3 , Tailwind CSS" />
          <SkillItem title=" Responsive design"  />
          <SkillItem title="git , github" />
        </div>

        <Title
          icon={<ImTrophy />}
          firstPart="oth"
          secondPart="er"
          
        />
        <div className="flex flex-wrap items-center justify-center  sm:p-5 text-xs sm:text-sm  ">
          <MiniSkill text="bootstrap" />
          <MiniSkill text="scss" />
          <MiniSkill text="Node Js" />
          <MiniSkill text="mysql" />
          <MiniSkill text="Type Script" />
          <MiniSkill text="mui" />
          <MiniSkill text="zustand" />
        </div>

        <Title
          icon={<ImTerminal />}
          firstPart="SEO"
          secondPart="skills"
          border={'600'}
          width="1/2"
          padding={'7'}
          heading={'lg'}
        />

        <div className=" text-sm sm:text-lg  w-full px-4 sm:p-6  text-[--color-white]">
          <SkillItem title="On-page SEO Optimization" />
          <SkillItem title="Page Speed Optimization" />
          <SkillItem title="Google Analytics" />
          <SkillItem title="Google Search Console"  />
          <SkillItem title="Keyword Research & Maping"  />
          <SkillItem title="A/B Testing " />
          <SkillItem title="Internal Linking " />
          <SkillItem title="SEO Strategy Development " />
        </div>
        <Title
          icon={<ImTerminal />}
          firstPart="Word"
          secondPart="Press"
          border={'600'}
          width="1/2"
          padding={'7'}
          heading={'lg'}
        />

        <div className=" text-sm sm:text-lg  w-full px-4 sm:p-6  text-[--color-white]">
          <SkillItem title="Elementor Expertise" />
          <SkillItem title="WooCommerce Customization " />
          <SkillItem title="User Experience (UX) Optimization" />
          <SkillItem title="Theme Customization"  />
          <SkillItem title="WordPress Theme Development"  />
          <SkillItem title="Site Speed Optimization" />
         
          
        </div>
      </div>
    </div>
  );
}
