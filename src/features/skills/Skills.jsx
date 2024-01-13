import Title from '../ui/Title';
import SkillItem from './SkillItem';

import { ImStatsBars2, ImTerminal, ImTrophy } from 'react-icons/im';

export default function Skills() {
  return (
    <div className="mb-12 flex flex-col items-start justify-evenly bg-[var(--primary-color-2)]  px-5  pb-12    ">
      <Title
        icon={<ImStatsBars2 />}
        firstPart="Ski"
        secondPart="lls"
        border={"600"}
        size="4xl"
      />

      <div
        className="my-7 w-full rounded-lg bg-[var(--primary-color-3)]
py-5"
      >
        <Title
          icon={<ImTerminal />}
          firstPart="cod"
          secondPart="ing"
          border={"600"}
          width="1/2"
          size="2xl"
          padding={"7"}
        />

        <div className="  w-full p-7  text-white">
          <SkillItem title="HTML 5 , CSS 3" />
          <SkillItem title="Tailwind CSS"  fill="4/5"/>
          <SkillItem title="java script" fill="4/5" percentage={"80"} />
          <SkillItem title="React js" fill="4/5" percentage={"80"} />
          <SkillItem title="git , github" />
          <SkillItem title="redux " fill="4/5" percentage={"80"} />
        </div>

        <Title
          icon={<ImTrophy />}
          firstPart="oth"
          secondPart="er"
          border={"600"}
          size="2xl"
          padding={"7"}
        />
        <div className="flex flex-wrap items-center justify-center gap-4 p-7 text-sm uppercase ">
          <span className=" rounded-lg bg-black  px-3 py-1">RESTful API </span>
          <span className=" rounded-lg bg-black px-3 py-1">context api</span>
          <span className=" rounded-lg bg-black px-3 py-1">scss</span>
          <span className=" rounded-lg bg-black px-3 py-1">mui</span>
          <span className=" rounded-lg bg-black px-3 py-1">
            react hook form
          </span>
          <span className=" rounded-lg bg-black px-3 py-1">react query</span>
          <span className=" rounded-lg bg-black px-3 py-1">bootstrap</span>
          <span className=" rounded-lg bg-black px-3 py-1">Responsive</span>
          <span className=" rounded-lg bg-black px-3 py-1">wordpress</span>
          <span className=" rounded-lg bg-black px-3 py-1">jquery </span>
          <span className=" rounded-lg bg-black px-3 py-1">seo</span>
        </div>
      </div>
    </div>
  );
}
