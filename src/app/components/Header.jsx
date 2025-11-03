import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <FaApple size={40} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#" className="active">
              iWatch
            </a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <CiSearch size={30} />
        <div>|</div>
        <LuShoppingBag size={25} />
      </div>
    </header>
  );
};

export default Header;
