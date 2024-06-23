"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface ProjectSliderButtonsProps {
  containerStyles: string;
  buttonStyles: string;
  iconStyles?: string;
}

const ProjectSliderButtons = ({
  containerStyles,
  buttonStyles,
  iconStyles,
}: ProjectSliderButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={buttonStyles}>
        <PiCaretLeftBold
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={buttonStyles}>
        <PiCaretRightBold
          className={iconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default ProjectSliderButtons;
