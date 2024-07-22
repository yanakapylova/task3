export const Footer = function () {
  return (
    <footer>
      <div className="contacts">
        <h3>For questions and suggestions</h3>
        <div className="block">
          <img src="/img/footer/icon-email.svg" alt="email-icon" />
          <div className="text">email@shelter.com</div>
        </div>
        <div className="block">
          <img src="/img/footer/icon-phone.svg" alt="email-icon" />
          <div className="text">+13 674 567 75 54</div>
        </div>
      </div>
      <div className="contacts">
      <h3>We are waiting for your visit</h3>
        <div className="block">
          <img src="/img/footer/icon-marker.png" alt="email-icon" />
          <div className="text">1 Central Street, Boston (entrance from the store)</div>
        </div>
        <div className="block">
          <img src="/img/footer/icon-marker.png" alt="email-icon" />
          <div className="text">18 South Park, London </div>
        </div>
      </div>
      <img src="/img/footer/footer-puppy.png" alt="" />
    </footer>
  );
};
