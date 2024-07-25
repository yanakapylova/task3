import { useEffect, useState } from "react";
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

  function navigationControl() {
    const arrowLeft: any = document.querySelector("#arrow-left");
    const arrowRight: any = document.querySelector("#arrow-right");
    if (startSliderIndex + itemsInRow > cards.length - 1) {
      arrowRight.disabled = true;
    } else if (startSliderIndex == 0) {
      arrowLeft.disabled = true;
    } else {
      arrowLeft.disabled = false;
      arrowRight.disabled = false;
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
