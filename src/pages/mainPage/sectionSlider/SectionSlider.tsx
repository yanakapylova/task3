import { useEffect, useRef, useState } from "react";
import { cards } from "./pets-list";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/button/PrimaryButton";
import SliderCircleButton from "../../../components/button/SliderCircleButton";
import { Slider } from "../../../components/slider/Slider";

export const SectionSlider = function () {
  const [itemsInRow, setItemsInRow] = useState(0);
  const [rowsNumber, setRowsNumber] = useState(0);
  const [startSliderIndex, setStartSliderIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setItemsInRow(() => 3);
    } else if (window.innerWidth >= 768) {
      setItemsInRow(() => 2);
    } else {
      setItemsInRow(() => 1);
    }

    setRowsNumber(() => 1);
  }, []);

  const buttonLeft: any = useRef<HTMLButtonElement>();
  const buttonRight: any = useRef<HTMLButtonElement>();

  function navigationControl() {
    if (startSliderIndex + itemsInRow > cards.length - 1) {
      buttonRight.current.disabled = true;
    } else if (startSliderIndex == 0) {
      buttonLeft.current.disabled = true;
    } else {
      buttonLeft.current.disabled = false;
      buttonRight.current.disabled = false;
    }
  }

  function handleSliderClick(step: number) {
    setStartSliderIndex((prev) => prev + step);
  }

  return (
    <section className="section3">
      <h3>
        Our friends who
        <br />
        are looking for a house
      </h3>
      <div className="sliderAndNavigation">
        <SliderCircleButton
          ref={buttonLeft}
          id="arrow-left"
          onClick={() => handleSliderClick(-1)}
        >
          ←
        </SliderCircleButton>
        <Slider
          navigationControl={navigationControl}
          itemsInRow={itemsInRow}
          rowsNumber={rowsNumber}
          handleSliderClick={handleSliderClick}
          startSliderIndex={startSliderIndex}
        />

        <SliderCircleButton
          ref={buttonRight}
          id="arrow-right"
          onClick={() => handleSliderClick(1)}
        >
          →
        </SliderCircleButton>
      </div>
      <Link to="/ourpets">
        <PrimaryButton>Get to know the rest</PrimaryButton>
      </Link>
    </section>
  );
};
