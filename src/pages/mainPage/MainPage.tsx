import { useEffect } from "react";
import { SectionAbout } from "./sectionAbout/SectionAbout";
import { SectionDonation } from "./sectionDonation/SectionDonation";
import { SectionHelp } from "./sectionHelp/SectionHelp";
import { SectionMain } from "./sectionMain/SectionMain";
import { SectionSlider } from "./sectionSlider/SectionSlider";
import { activePageMark } from "../../components/portal/activePage";

export const MainPage = function () {
  useEffect(() => {
    activePageMark()
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
