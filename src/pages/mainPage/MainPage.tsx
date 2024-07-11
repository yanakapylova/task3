import { SectionAbout } from "./sectionAbout/SectionAbout";
import { SectionDonation } from "./sectionDonation/SectionDonation";
import { SectionHelp } from "./sectionHelp/SectionHelp";
import { SectionMain } from "./sectionMain/SectionMain";
import { SectionSlider } from "./sectionSlider/SectionSlider";

export const MainPage = function () {
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
