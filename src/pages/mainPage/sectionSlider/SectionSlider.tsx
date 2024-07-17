import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { PopUp } from "../../../components/popup/PopUp";
import { Pet } from "./pets-list";
import { cards } from "./pets-list";

export const SectionSlider = function () {
  const [startSliderIndex, setStartSliderIndex] = useState(1);
  const [activePopUp, setActivePopUp] = useState(cards[0]);

  const [currSliderArr, setCurrSliderArr]: any[] = useState([]);
  
  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setCurrSliderArr([...currSliderArr, cards[0], cards[1], cards[2]]);
    } else if (window.innerWidth >= 768) {
      setCurrSliderArr([cards[0], cards[1]]);
    } else {
      setCurrSliderArr([cards[0]]);
    }
  }, []);

  function sliderConstructor() {
    let currSliderIndex: number = startSliderIndex;
    let currSliderArrCONSTRUCTOR: Pet[] = [];

    let itemsInRow: number;

    if (window.innerWidth >= 1280) {
      itemsInRow = 3;
    } else if (window.innerWidth >= 768) {
      itemsInRow = 2;
    } else {
      itemsInRow = 1;
    }

    for (let i = 0; i < itemsInRow; i++) {
      currSliderArrCONSTRUCTOR.push(cards[currSliderIndex]);
      currSliderIndex++;

      if (currSliderIndex == cards.length) {
        currSliderIndex = 0;
      }
    }

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

  function handleSliderClick() {
    if (startSliderIndex == cards.length - 1) {
      setStartSliderIndex(0);
    } else {
      setStartSliderIndex((prev) => prev + 1);
    }

    setCurrSliderArr(sliderConstructor());
  }

  return (
    <section className="section3">
      <h3>
        Our friends who
        <br />
        are looking for a house
      </h3>
      <div className="slider-wrapper">
        <button className="slider-left-arrow">←</button>
        <div className="slider">
          {currSliderArr.map((item: Pet) => {
            return (
              <div className="slider-item">
                <div className="slider-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="slider-item-name">{item.name}</div>
                <Button
                  className="slider-item-button"
                  onClick={() => buttonMore(item)}
                >
                  Learn more
                </Button>
              </div>
            );
          })}
        </div>
        <button className="slider-right-arrow" onClick={handleSliderClick}>
          →
        </button>
      </div>
      <PopUp item={activePopUp} />
      <Button variant="contained">Get to know the rest</Button>
    </section>
  );
};
