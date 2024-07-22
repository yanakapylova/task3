import { useEffect } from "react";
import { SectionAbout } from "./sectionAbout/SectionAbout";
import { SectionDonation } from "./sectionDonation/SectionDonation";
import { SectionHelp } from "./sectionHelp/SectionHelp";
import { SectionMain } from "./sectionMain/SectionMain";
import { SectionSlider } from "./sectionSlider/SectionSlider";

export const MainPage = function () {
  useEffect(() => {
    document.querySelector("header")?.classList.add("dark");
    document.querySelector("header")?.classList.remove("light");

    document.querySelector("header div.active")?.classList.remove("active");
    document
      .querySelector("header nav div:nth-child(1)")
      ?.classList.add("active");

      document.querySelector(".burger-menu-list div.active")?.classList.remove("active");
    document
      .querySelector(".burger-menu-list div:nth-child(1)")
      ?.classList.add("active");
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [window.location.hash]);

  return (
    <>
      <SectionMain />
      <SectionAbout />
      <SectionSlider />
      <SectionHelp />
      <SectionDonation />
    </>
  );
};
