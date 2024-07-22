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
  });

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
