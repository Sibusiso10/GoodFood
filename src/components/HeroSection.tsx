import "../styles/HeroSection.css";
import AnimalSyleFries from "../assets/images/heroImages/animalStyleFries.png";
import sandwich from "../assets/images/heroImages/sandwich.png";

function HeroSection() {
  return (
    <div className="centerHeroSection">
      <div className="heroSection">
        <div className="firstSection">
          <div className="contentSection">
            <h1>
              THE BEST FOOD FROM GOOD FOOD,
              <span>TASTE THAT'S OUT OF THIS WORLD</span>
            </h1>
          </div>
          <div className="firstSectionImg">
            <img
              src={AnimalSyleFries}
              alt="Image of Fries with yellow souce inside a plastic cup"
            />
          </div>
        </div>
        <div className="secondSection">
          <img
            src={sandwich}
            alt="a sandwich with a golden-brown bun, fried egg, crispy bacon, arugula, and melted cheese on a wooden board, with condiments and spices in the background"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
