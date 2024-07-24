import { useContext } from "react";
import { Link } from "react-router-dom";

export const Header = function () {
  return (
    <header>
      <div className="logo">
        <div className="logoTitle">Cozy House</div>
        <div className="logoSubtitle">Shelter for pets in Boston</div>
      </div>
      <nav>
        <div className="active">
          <Link to="/">About the shelter</Link>
        </div>
        <div>
          <Link to="/ourpets">Our pets</Link>
        </div>
        <div>
          <a href="/#help">Help the shelter</a>
        </div>
        <div>
          <a href="/#contacts">Contacts</a>
        </div>
      </nav>

      <div className="burgerMenu">
        <input
          type="checkbox"
          id="burgerCheckbox"
          className="burgerCheckbox"
        />
        <label htmlFor="burgerCheckbox" className="burger"></label>
        <div className="burgerMenuList">
          <div className="burgerMenuItem active">
            <Link to="/">About the shelter</Link>
          </div>
          <div className="burgerMenuItem">
            <Link to="/ourpets">Our pets</Link>
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
