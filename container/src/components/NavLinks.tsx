import { Link } from "react-router-dom";

export const NavLinks = () => (
  <nav>
    <ul style={{ display: "flex", gap: "40px" }}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/react-front-end-1">React FE 1</Link>
      </li>
      <li>
        <Link to="/react-front-end-2">React FE 2</Link>
      </li>
    </ul>
  </nav>
);
