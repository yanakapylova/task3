export const Header = function () {
  return (
    <header>
      <div className="logo">
        <div className="logo-title">Cozy House</div>
        <div className="logo-subtitle">Shelter for pets in Boston</div>
      </div>
      <nav>
        <div className="active">About the shelter</div>
        <div>Our pets</div>
        <div>Help the shelter</div>
        <div>Contacts</div>
      </nav>

      <div className="burger-menu">
        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
        <label htmlFor="burger-checkbox" className="burger"></label>
        <div className="burger-menu-list">
          <div className="burger-menu-item active"><a href="#">About the shelter</a></div>
          <div className="burger-menu-item"><a href="#">Our pets</a></div>
          <div className="burger-menu-item"><a href="#">Help the shelter</a></div>
          <div className="burger-menu-item"><a href="#">Contacts</a></div>
        </div>
      </div>
    </header>
  );
};
