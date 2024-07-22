import Button from "@mui/material/Button";

export const SectionMain = function () {
  return (
    <section className="section1">
      <main>
        <div className="content">
          <div className="content-title">
            Not only people
            <br />
            need a house
          </div>
          <div className="content-subtitle">
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </div>
          <Button variant="contained">Make a friend</Button>
        </div>
        <div className="main-image">
          <img src="/img/main/main-screen-puppy.png" alt="" />
        </div>
      </main>
    </section>
  );
};
