import "../styles/NavBar.css";
import GoodFoodLog from "../assets/svgs/goodFoodLog.svg";
import cartIcon from "../assets/svgs/cartIcon.svg";
import { Link } from "react-router-dom";

interface NavBarProps {
  numOfItemsInCart: number;
}

const NavBar: React.FC<NavBarProps> = ({ numOfItemsInCart }) => {
  return (
    <div className="navBaeSizeLimiter">
      <div className="navBar">
        <div className="log">
          <Link to={"/"}>
            <img src={GoodFoodLog} alt="Svg log for Good Food" />
          </Link>
        </div>
        <div className="navContainer">
          <div className="cart">
            <Link to={"/Cart"}>
              <img src={cartIcon} alt="cart icon" />
            </Link>
            <div className="counter">
              <span>{numOfItemsInCart}</span>
            </div>
          </div>
          <div className="signInBtn">
            <Link to="/login">
              <button className="btn">LOGIN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
