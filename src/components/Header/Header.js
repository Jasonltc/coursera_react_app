import logo from "../../assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="/home">Homepage</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/blog">Menu</a>
        </li>
        <li>
          <a href="/blog">Reservations</a>
        </li>
        <li>
          <a href="/blog">Order Online</a>
        </li>
        <li>
          <a href="/blog">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
