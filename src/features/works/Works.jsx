import WorkItem from './WorkItem';
import Title from '../ui/Title';

import { ImStarFull } from 'react-icons/im';

export default function Works() {
  return (
    <div
      id="projects"
      className=" mb-5 flex flex-col items-start justify-evenly gap-8 rounded-lg bg-[var(--primary-color-800)]  pb-12  lg:h-[35rem]  lg:pt-[65rem] xl:pt-[75rem] 2xl:pt-[80rem] "
    >
      <Title
        icon={<ImStarFull />}
        firstPart="pro"
        secondPart="jects"
        border={'500'}
        width="full"
        heading="big"
      />

      <div className="px-7 py-7 bg-[var(--primary-color-800)] ">
        <WorkItem />
        <WorkItem />
      </div>

      <div className="w-full px-7  text-[--color-white]"></div>
    </div>
  );
}
