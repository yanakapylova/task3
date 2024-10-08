import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./themeContext";


export const Header = function () {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className={isDark ? "dark" : "light"}>
      <div className="logo">
        <div className="logoTitle">Cozy House</div>
        <div className="logoSubtitle">Shelter for pets in Boston</div>
      </div>
      <nav>
        <div>
          <NavLink to="/">About the shelter</NavLink>
        </div>
        <div>
          <NavLink to="/ourpets">Our pets</NavLink>
        </div>
        <div>
          <a href="/#help">Help the shelter</a>
        </div>
        <div>
          <a href="/#contacts">Contacts</a>
        </div>
      </nav>

      <div className="burgerMenu">
        <input type="checkbox" id="burgerCheckbox" className="burgerCheckbox" />
        <label htmlFor="burgerCheckbox" className="burger"></label>
        <div className="burgerMenuList">
          <div className="burgerMenuItem active">
            <NavLink to="/">About the shelter</NavLink>
          </div>
          <div className="burgerMenuItem">
            <NavLink to="/ourpets">Our pets</NavLink>
          </div>
          <div className="burgerMenuItem">
            <a href="/#help">Help the shelter</a>
          </div>
          <div className="burgerMenuItem">
            <a href="/#contacts">Contacts</a>
          </div>
        </div>
      </div>
    </header>
  );
};
