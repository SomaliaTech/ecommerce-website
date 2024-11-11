import { FaShopware } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <FaShopware style={{ color: "green" }} />
          Kasmalshop
        </div>
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Contact Us</li>
          </a>
          <a href="">
            <li>Service</li>
          </a>
          <a href="">
            <li>Service</li>
          </a>
          <a href="">
            <li>Service</li>
          </a>
          <a href="" className="sing">
            <li style={{ color: "white" }}>Register</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
