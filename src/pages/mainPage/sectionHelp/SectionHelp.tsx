export const SectionHelp = function () {
  const row: { [key: string]: string } = {
    "Pet food": "/img/help/icon-pet-food.svg",
    Transportation: "/img/help/icon-transportation.svg",
    Toys: "/img/help/icon-toys.svg",
    "Bowls and cups": "/img/help/icon-bowls-and-cups.svg",
    Shampoos: "/img/help/icon-shampoos.svg",
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
      <div className="row">
        {Object.keys(row).map((name) => (
          <div className="item">
            <img src={row[name]} alt={name} />
            <div className="item-name">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
