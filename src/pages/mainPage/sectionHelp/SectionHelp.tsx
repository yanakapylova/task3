export const SectionHelp = function () {
  const row1: { [key: string]: string } = {
    "Pet food": "/img/help/icon-pet-food.svg",
    Transportation: "/img/help/icon-transportation.svg",
    Toys: "/img/help/icon-toys.svg",
    "Bowls and cups": "/img/help/icon-bowls-and-cups.svg",
    Shampoos: "/img/help/icon-shampoos.svg",
  };

  const row2: { [key: string]: string } = {
    Vitamins: "/img/help/icon-vitamins.svg",
    Medicines: "/img/help/icon-medicines.svg",
    "Collars / leashes": "/img/help/icon-collars-leashes.svg",
    "Sleeping areas": "/img/help/icon-sleeping-area.svg",
  };

  return (
    <section className="section4">
      <h3>
        How you can help
        <br />
        our shelter
      </h3>
      <div className="row row1">
        {Object.keys(row1).map((name) => (
          <div className="item">
            <img src={row1[name]} alt={name} />
            <div className="item-name">{name}</div>
          </div>
        ))}
      </div>

      <div className="row row2">
        {Object.keys(row2).map((name) => (
          <div className="item">
            <img src={row2[name]} alt={name} />
            <div className="item-name">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
