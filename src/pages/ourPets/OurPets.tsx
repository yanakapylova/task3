import { useEffect, useState } from "react";
import { Pet } from "../mainPage/sectionSlider/pets-list";
import { cards } from "../mainPage/sectionSlider/pets-list";
import { PopUp } from "../../components/popup/PopUp";
import SliderButton from "../../components/button/SliderButton";
import PrimaryButton from "../../components/button/PrimaryButton";
import SliderCircleButton from "../../components/button/SliderCircleButton";

export const OurPets = function () {
  const [startSliderIndex, setStartSliderIndex] = useState(0);
  const [activePopUp, setActivePopUp] = useState(cards[0]);

  const [currSliderArr, setCurrSliderArr]: any[] = useState([]);

  const [itemsInRow, setItemsInRow] = useState(0);
  const [rowsNumber, setRowsNumber] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    document.querySelector("header")?.classList.add("light");
    document.querySelector("header")?.classList.remove("dark");

    document.querySelector("header div.active")?.classList.remove("active");
    document
      .querySelector("header nav div:nth-child(2)")
      ?.classList.add("active");

    document
      .querySelector(".burger-menu-list div.active")
      ?.classList.remove("active");
    document
      .querySelector(".burger-menu-list div:nth-child(2)")
      ?.classList.add("active");
  });

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

    setCurrSliderArr(() => sliderConstructor());
  }, [itemsInRow, rowsNumber, startSliderIndex]);

  function sliderConstructor() {
    let currSliderIndex: number = startSliderIndex;
    let currSliderArrCONSTRUCTOR: Pet[] = [];

    let flag = true;
    for (let j = 0; j < rowsNumber; j++) {
      for (let i = 0; i < itemsInRow; i++) {
        currSliderArrCONSTRUCTOR.push(cards[currSliderIndex]);
        currSliderIndex++;

        if (currSliderIndex == cards.length) {
          flag = false;
          let button: any = document.querySelector(".slider-right-arrow");
          button.disabled = true;
          break;
        }
      }
      if (!flag) {
        break;
      }
    }

    let button_right: any = document.querySelector(".slider-right-arrow");
    button_right.disabled =
      startSliderIndex + itemsInRow * rowsNumber > cards.length - 1
        ? true
        : false;

    let button_left: any = document.querySelector(".slider-left-arrow");
    button_left.disabled = startSliderIndex == 0 ? true : false;

    let button_d_right: any = document.querySelector(
      ".slider-right-double-arrow"
    );
    button_d_right.disabled =
      startSliderIndex + itemsInRow * rowsNumber * 2 > cards.length - 1
        ? true
        : false;

    let button_d_left: any = document.querySelector(
      ".slider-left-double-arrow"
    );
    button_d_left.disabled =
      startSliderIndex - itemsInRow * rowsNumber * 2 < 0 ? true : false;

    return currSliderArrCONSTRUCTOR;
  }

  function buttonMore(activeItem: Pet) {
    setActivePopUp(activeItem);

    const popupWrapper: any = document.querySelector(".popupWrapper");
    popupWrapper.style.display = "flex";
    popupWrapper.addEventListener("click", () => {
      popupWrapper.style.display = "none";
    });

    const popup: any = document.querySelector(".popupWrapper .popup");
    popup.addEventListener("click", (e: any) => {
      e.stopImmediatePropagation();
    });

    const close: any = document.querySelector(".popupWrapper .close");
    close.addEventListener("click", () => {
      popupWrapper.style.display = "none";
    });
  }

  function handleSliderClick(step: number) {
    if (startSliderIndex == cards.length - 1) {
      setStartSliderIndex(() => 0);
    } else {
      setStartSliderIndex((prev) => prev + step * itemsInRow * rowsNumber);
    }

    setPageNumber((prev) => prev + step);

    setCurrSliderArr(() => sliderConstructor());
  }

  return (
    <main className="our-pets">
      <h3>
        Our friends who
        <br />
        are looking for a house
      </h3>
      <div className="slider-wrapper">
        <div className="slider">
          {currSliderArr.map((item: Pet) => {
            return (
              <div className="slider-item" key={`${item.name}${item.breed}${item.description}`}>
                <div className="slider-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="slider-item-name">{item.name}</div>
                <SliderButton onClick={() => buttonMore(item)}>
                  Learn more
                </SliderButton>
              </div>
            );
          })}
        </div>
      </div>
      <PopUp item={activePopUp} />
      <div className="navigation">
        <SliderCircleButton
          className="slider-left-double-arrow arrow"
          onClick={() => handleSliderClick(-2)}
        >
          &lt;&lt;
        </SliderCircleButton>

        <SliderCircleButton
          className="slider-left-arrow arrow"
          onClick={() => handleSliderClick(-1)}
        >
          &lt;
        </SliderCircleButton>

        <SliderCircleButton className="pageNumber">
          {pageNumber}
        </SliderCircleButton>
        <SliderCircleButton
          className="slider-right-arrow arrow"
          onClick={() => handleSliderClick(1)}
        >
          &gt;
        </SliderCircleButton>

        <SliderCircleButton
          className="slider-right-double-arrow arrow"
          onClick={() => handleSliderClick(2)}
        >
          &gt;&gt;
        </SliderCircleButton>
      </div>
      <PrimaryButton>Get to know the rest</PrimaryButton>
    </main>
  );
};
