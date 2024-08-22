import React, { useEffect, useState } from "react";
import "./App.css";
import "./pages/mainPage/sectionMain/style.css";
import "./pages/mainPage/sectionAbout/style.css";
import "./pages/mainPage/sectionSlider/style.css";
import "./pages/mainPage/sectionHelp/style.css";
import "./pages/mainPage/sectionDonation/style.css";
import "./pages/ourPets/style.css";
import "./pages/users/style.css";
import "./components/portal/header.css";
import "./components/portal/burger.css";
import "./components/portal/footer.css";
import "./components/popup/style.css";
import "./components/slider/slider.css";
import { Portal } from "./components/portal/Portal";
import { MainPage } from "./pages/mainPage/MainPage";
import { OurPets } from "./pages/ourPets/OurPets";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./components/portal/themeContext";
import { Users } from "./pages/users/Users";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <BrowserRouter>
          <Portal>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="ourpets" element={<OurPets />} />
              <Route path="users" element={<Users />} />
            </Routes>
          </Portal>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
