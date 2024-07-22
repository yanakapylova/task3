import React from "react";
import "./App.css";
import "./pages/mainPage/sectionMain/style.css";
import "./pages/mainPage/sectionAbout/style.css";
import "./pages/mainPage/sectionSlider/style.css";
import "./pages/mainPage/sectionHelp/style.css";
import "./pages/mainPage/sectionDonation/style.css";
import "./pages/ourPets/style.css";
import "./components/portal/header.css";
import "./components/portal/burger.css";
import "./components/portal/footer.css";
import "./components/popup/style.css";
import { Portal } from "./components/portal/Portal";
import { MainPage } from "./pages/mainPage/MainPage";
import { OurPets } from "./pages/ourPets/OurPets";

function App() {
  return (
    <div className="App">
      <Portal>
        {/* <MainPage /> */}
        <OurPets />
      </Portal>
    </div>
  );
}

export default App;
