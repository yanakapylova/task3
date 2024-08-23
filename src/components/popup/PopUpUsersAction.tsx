import { useEffect, useState } from "react";
import SliderCircleButton from "../button/SliderCircleButton";

interface Props {
  status: number;
}

export function showPopUp() {
  const popup: any = document.querySelector(".popup");
  popup.style.display = "flex";
}

export const PopUpUsersAction = function (props: Props) {
  const [content, setContent] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    const popup: any = document.querySelector(".popup");

    const close: any = document.querySelector(".popup .close");
    close.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }, []);

  useEffect(() => {
    handleContent();
  }, [props.status]);

  function handleContent() {
    switch (true) {
      case props.status >= 200 && props.status < 300:
        setContent(() => "Действие успешно ");
        setBgColor(() => "green");
        break;
      case props.status == 400:
        setContent(() => "Пользователь с таким id не существует");
        setBgColor(() => "red");
        break;
      default:
        setContent(() => "Неизвестная ошибка");
    }
  }

  return (
    <div className="popup" style={{ backgroundColor: bgColor }}>
      <div className="close">
        x
      </div>
      <div className="content">{content}</div>
    </div>
  );
};
