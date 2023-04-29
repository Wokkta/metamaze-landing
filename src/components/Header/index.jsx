import s from './Header.module.css';
function Header() {
  return (
    <header>
      <div className={s.logoContainer}>
        <div className={s.Logo}>
          <a to="/#"></a>
        </div>
      </div>
      <a href="#">
        <span>Home</span>
      </a>
      <a href="#">
        <span>About Us</span>
      </a>
      <a href="#">
        <span>About CoM</span>
      </a>
      <a href="#">
        <span>Map</span>
      </a>
      <a href="#">
        <span>FAQ's</span>
      </a>
      <a href="#">
        <span>Career</span>
      </a>
    </header>
  );
}

export default Header;
