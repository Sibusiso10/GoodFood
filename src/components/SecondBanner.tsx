import BannerImg from "../assets/images/secondBanner/cheeseBurgerEggRolls.png";
import "../styles/SecondBanner.css";

const SecondBanner = () => {
  return (
    <>
      <div className="centerBanner">
        <div className="banner">
          <div className="content">
            <h3>SEVERING MEALS YOU WON'T EVER FORGET</h3>
          </div>
          <div className="bannerImg">
            <div className="imgCover"></div>
            <img src={BannerImg} alt="Image of cheese Burger Egg Rolls" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondBanner;
