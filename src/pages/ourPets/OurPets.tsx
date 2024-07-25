import { useEffect, useState } from "react";
import { cards } from "../mainPage/sectionSlider/pets-list";
import PrimaryButton from "../../components/button/PrimaryButton";
import { activePageMark } from "../../components/portal/activePage";
import { Slider } from "../../components/slider/Slider";
import SliderCircleButton from "../../components/button/SliderCircleButton";

export const OurPets = function () {
  useEffect(() => {
    activePageMark();
  });
  const [itemsInRow, setItemsInRow] = useState(0);
  const [rowsNumber, setRowsNumber] = useState(0);
  const [startSliderIndex, setStartSliderIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setItemsInRow(() => 4);
      setRowsNumber(() => 2);
    } else if (window.innerWidth >= 768) {
      setItemsInRow(() => 2);
      setRowsNumber(() => 3);
    } else {
      setItemsInRow(() => 1);
      setRowsNumber(() => 3);
    }
  }, []);

  function navigationControl(
    startSliderIndex: number,
    itemsInRow: number,
    rowsNumber: number
  ) {
    let button_right: any = document.querySelector(".sliderRightArrow");
    button_right.disabled =
      startSliderIndex + itemsInRow * rowsNumber > cards.length - 1
        ? true
        : false;

    let button_left: any = document.querySelector(".sliderLeftArrow");
    button_left.disabled = startSliderIndex == 0 ? true : false;

    let button_d_right: any = document.querySelector(".sliderRightDoubleArrow");
    button_d_right.disabled =
      startSliderIndex + itemsInRow * rowsNumber * 2 > cards.length - 1
        ? true
        : false;

    let button_d_left: any = document.querySelector(".sliderLeftDoubleArrow");
    button_d_left.disabled =
      startSliderIndex - itemsInRow * rowsNumber * 2 < 0 ? true : false;
  }

  const [pageNumber, setPageNumber] = useState(1);

  function handleSliderClick(step: number) {
    if (startSliderIndex == cards.length - 1) {
      setStartSliderIndex(() => 0);
    } else {
      setStartSliderIndex((prev) => prev + step * itemsInRow * rowsNumber);
    }

    setPageNumber((prev) => prev + step);
  }

  return (
    <main className="ourPets">
      <h3>
        Our friends who
        <br />
        are looking for a house
      </h3>
      <Slider
        navigationControl={navigationControl}
        itemsInRow={itemsInRow}
        rowsNumber={rowsNumber}
        handleSliderClick={handleSliderClick}
        startSliderIndex={startSliderIndex}
      />
      <div className="navigation">
        <SliderCircleButton
          className="sliderLeftDoubleArrow arrow"
          onClick={() => handleSliderClick(-2)}
        >
          &lt;&lt;
        </SliderCircleButton>

        <SliderCircleButton
          className="sliderLeftArrow arrow"
          onClick={() => handleSliderClick(-1)}
        >
          &lt;
        </SliderCircleButton>

        <SliderCircleButton className="pageNumber">
          {pageNumber}
        </SliderCircleButton>

        <SliderCircleButton
          className="sliderRightArrow arrow"
          onClick={() => handleSliderClick(1)}
        >
          &gt;
        </SliderCircleButton>

        <SliderCircleButton
          className="sliderRightDoubleArrow arrow"
          onClick={() => handleSliderClick(2)}
        >
          &gt;&gt;
        </SliderCircleButton>
      </div>
      <PrimaryButton>Get to know the rest</PrimaryButton>
    </main>
  );
};
