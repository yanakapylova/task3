import { useEffect } from "react";
import SliderCircleButton from "../button/SliderCircleButton";

interface Props {
  item: {
    name: string;
    breed: string;
    description: string;
    image: string;
    info: string[];
  };
}

export const PopUp = function (props: Props) {
  useEffect(() => {
    const popupWrapper: any = document.querySelector(".popupWrapper");
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
  }, []);

  return (
    <div className="popupWrapper">
      <div className="popup">
        <SliderCircleButton className="close">
          <img src="/img/slider/popup-close.png" alt="close button" />
        </SliderCircleButton>
        <div className="contentImage">
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className="contentDescription">
          <div className="title">{props.item.name}</div>
          <div className="subtitle">{props.item.breed}</div>
          <div className="description">{props.item.description}</div>
          <div className="info">
            {props.item.info.map((item, key) => {
              return <div key={key}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
