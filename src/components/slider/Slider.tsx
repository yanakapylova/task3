import { useEffect, useState } from "react";
import { Pet, cards } from "../../pages/mainPage/sectionSlider/pets-list";
import SliderButton from "../button/SliderButton";
import { PopUp } from "../popup/PopUp";

export const Slider = function (props: any) {
  const [activePopUp, setActivePopUp] = useState(cards[0]);

  const [currSliderArr, setCurrSliderArr]: any[] = useState([]);

  useEffect(() => {

    setCurrSliderArr(() => sliderConstructor());
  }, [props.itemsInRow, props.rowsNumber, props.startSliderIndex]);

  function sliderConstructor() {
    let currSliderIndex: number = props.startSliderIndex;
    let currSliderArrCONSTRUCTOR: Pet[] = [];

    let flag = true;
    for (let j = 0; j < props.rowsNumber; j++) {
      for (let i = 0; i < props.itemsInRow; i++) {
        currSliderArrCONSTRUCTOR.push(cards[currSliderIndex]);
        currSliderIndex++;

        if (currSliderIndex == cards.length) {
          flag = false;
          break;
        }
      }
      if (!flag) {
        break;
      }
    }

    props.navigationControl(props.startSliderIndex, props.itemsInRow, props.rowsNumber);

    return currSliderArrCONSTRUCTOR;
  }

  function handleButtonClick(step: number) {
    props.handleSliderClick(step); // Call the function from the parent component
  }

  function buttonMore(activeItem: Pet) {
    setActivePopUp(activeItem);

    const popupWrapper: any = document.querySelector(".popupWrapper");
    popupWrapper.style.display = "flex";
  }

  
  return (
    <div className="container">
      <div className="sliderWrapper">
        <div className="slider">
          {currSliderArr.map((item: Pet) => {
            return (
              <div
                className="sliderItem"
                key={`${item.name}${item.breed}${item.description}`}
              >
                <div className="sliderItemImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="sliderItemName">{item.name}</div>
                <SliderButton
                  onClick={() => {
                    buttonMore(item);
                  }}
                >
                  Learn more
                </SliderButton>
              </div>
            );
          })}
        </div>
      </div>
      <PopUp item={activePopUp} />
    </div>
  );
};
