import PrimaryButton from "../../../components/button/PrimaryButton";

export const SectionMain = function () {
  return (
    <section className="section1">
      <div className="content">
        <div className="contentTitle">
          Not only people
          <br />
          need a house
        </div>
        <div className="contentSubtitle">
          We offer to give a chance to a little and nice puppy with an extremely
          wide and open heart. He or she will love you more than anybody else in
          the world, you will see!
        </div>
        <PrimaryButton>Make a friend</PrimaryButton>
      </div>
      <div className="mainImage">
        <img src="/img/main/main-screen-puppy.png" alt="puppy" />
      </div>
    </section>
  );
};
