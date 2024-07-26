import { useEffect, useRef, useState } from "react";
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

  const buttonRight: any = useRef<HTMLButtonElement>();
  const buttonLeft: any = useRef<HTMLButtonElement>();
  const buttonDoubleRight: any = useRef<HTMLButtonElement>();
  const buttonDoubleLeft: any = useRef<HTMLButtonElement>();

  function navigationControl(
    startSliderIndex: number,
    itemsInRow: number,
    rowsNumber: number
  ) {
    buttonRight.current.disabled =
      startSliderIndex + itemsInRow * rowsNumber > cards.length - 1
        ? true
        : false;

    buttonLeft.current.disabled = startSliderIndex == 0 ? true : false;

    buttonDoubleRight.current.disabled =
      startSliderIndex + itemsInRow * rowsNumber * 2 > cards.length - 1
        ? true
        : false;

    buttonDoubleLeft.current.disabled =
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
          ref={buttonDoubleLeft}
          onClick={() => handleSliderClick(-2)}
        >
          &lt;&lt;
        </SliderCircleButton>

        <SliderCircleButton
          ref={buttonLeft}
          onClick={() => handleSliderClick(-1)}
        >
          &lt;
        </SliderCircleButton>

        <SliderCircleButton className="pageNumber">
          {pageNumber}
        </SliderCircleButton>

        <SliderCircleButton
          ref={buttonRight}
          onClick={() => handleSliderClick(1)}
        >
          &gt;
        </SliderCircleButton>

        <SliderCircleButton
          ref={buttonDoubleRight}
          onClick={() => handleSliderClick(2)}
        >
          &gt;&gt;
        </SliderCircleButton>
      </div>
      <PrimaryButton>Get to know the rest</PrimaryButton>
    </main>
  );
};
