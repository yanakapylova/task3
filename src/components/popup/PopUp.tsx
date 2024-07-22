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
  return (
    <div className="popupWrapper">
      <div className="popup">
        <div className="close">
          <img src="/img/slider/popup-close.png" alt="" />
        </div>
        <div className="content-image">
          <img src={props.item.image} alt="" />
        </div>
        <div className="content-description">
          <div className="title">{props.item.name}</div>
          <div className="subtitle">{props.item.breed}</div>
          <div className="description">{props.item.description}</div>
          <div className="info">
            {props.item.info.map((item, key)=> {
                return <div key={key}>{item}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};