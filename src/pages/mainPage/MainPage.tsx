import { useContext, useEffect } from "react";
import { SectionAbout } from "./sectionAbout/SectionAbout";
import { SectionDonation } from "./sectionDonation/SectionDonation";
import { SectionHelp } from "./sectionHelp/SectionHelp";
import { SectionMain } from "./sectionMain/SectionMain";
import { SectionSlider } from "./sectionSlider/SectionSlider";
import { activePageMark } from "../../components/portal/activePage";
import { ThemeContext } from "../../components/portal/themeContext";

export const MainPage = function () {

  const {isDark, setIsDark} = useContext(ThemeContext)
  
  useEffect(() => {
    // activePageMark()
    setIsDark(true)
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
