import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-part1">Koin</span>
          <span className="logo-part2">X</span>
          <sup>™</sup>
        </div>

        <nav className="nav-links">
          <a href="#" className="nav-item">
            Crypto Taxes
          </a>
          <a href="#" className="nav-item">
            Free Tools
          </a>
          <a href="#" className="nav-item">
            Resource Center
          </a>
        </nav>

        <button className="get-started-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
