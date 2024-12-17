import "../styles/NavBar.css";
import GoodFoodLog from "../assets/svgs/goodFoodLog.svg";
import cartIcon from "../assets/svgs/cartIcon.svg";
import { Link } from "react-router-dom";

function NavBar() {
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
            <img src={cartIcon} alt="cart icon" />
            <div className="counter">
              <span>8</span>
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
}

export default NavBar;
