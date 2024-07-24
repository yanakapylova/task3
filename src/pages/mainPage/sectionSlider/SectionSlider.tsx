import { useEffect, useState } from "react";
import { PopUp } from "../../../components/popup/PopUp";
import { Pet } from "./pets-list";
import { cards } from "./pets-list";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/button/PrimaryButton";
import SliderButton from "../../../components/button/SliderButton";
import SliderCircleButton from "../../../components/button/SliderCircleButton";
import { sliderConstructor } from "./sliderConstructor";

export const SectionSlider = function () {
  const [startSliderIndex, setStartSliderIndex] = useState(0);
  const [activePopUp, setActivePopUp] = useState(cards[0]);
  const [currSliderArr, setCurrSliderArr]: any[] = useState([]);

  useEffect(() => {
    let itemsInRow: number;

    if (window.innerWidth >= 1280) {
      itemsInRow = 3;
    } else if (window.innerWidth >= 768) {
      itemsInRow = 2;
    } else {
      itemsInRow = 1;
    }
    
    setCurrSliderArr(() => sliderConstructor(startSliderIndex, itemsInRow));

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
  }, [startSliderIndex]);

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
      <div className="slider-wrapper">
        <SliderCircleButton
          id="arrow-left"
          onClick={() => handleSliderClick(-1)}
        >
          ←
        </SliderCircleButton>
        <div className="slider">
          {currSliderArr.map((item: Pet) => {
            return (
              <div className="slider-item" key={`${item.name}${item.breed}${item.description}`}>
                <div className="slider-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="slider-item-name">{item.name}</div>
                <SliderButton onClick={() => setActivePopUp(item)}>
                  Learn more
                </SliderButton>
              </div>
            );
          })}
        </div>
        <SliderCircleButton
          id="arrow-right"
          onClick={() => handleSliderClick(1)}
        >
          →
        </SliderCircleButton>
      </div>
      <PopUp item={activePopUp} />
      <Link to="/ourpets">
        <PrimaryButton>Get to know the rest</PrimaryButton>
      </Link>
    </section>
  );
};
