import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from '../Icons';
import Skill from '../Skill';
import styles from './SkillsCarousel.module.css';

const SCROLL_OFFSET = 200;
export default function SkillsCarousel({ skills, assetsUrl }) {
  const carouselRef = useRef();

  const handleClickLeft = () =>
    carouselRef.current.scroll({
      left: carouselRef.current.scrollLeft - SCROLL_OFFSET,
      behavior: 'smooth',
    });
  const handleClickRight = () =>
    carouselRef.current.scroll({
      left: carouselRef.current.scrollLeft + SCROLL_OFFSET,
      behavior: 'smooth',
    });

  return (
    <div className="flex items-center gap-x-4 sm:gap-x-8 my-auto">
      <button className="text-white group" onClick={handleClickLeft}>
        <ChevronLeft className="h-14 w-14 group-hover:scale-125 transition-transform" />
      </button>
      <div
        className={`w-full snap-mandatory snap-x overflow-x-auto flex items-center gap-x-14 p-2 ${styles.carousel}`}
        ref={carouselRef}
      >
        {skills.map(({ name, icon }) => (
          <Skill name={name} icon={`${assetsUrl}/icons/${icon}`} key={name} />
        ))}
      </div>
      <button className="text-white group" onClick={handleClickRight}>
        <ChevronRight className="h-14 w-14 group-hover:scale-125 transition-transform" />
      </button>
    </div>
  );
}
