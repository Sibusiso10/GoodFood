import "../styles/MealMenu.css";
import FoodItems from "../components/FoodItems";
import sweetSpicyBeefTeriyakiNoodles from "../assets/images/mealMenuImages/Sweet & Spicy Beef Teriyaki Noodles.png";
import classicBeefRice from "../assets/images/mealMenuImages/Classic Beef and Rice.png";
import beefTacos from "../assets/images/mealMenuImages/Beef Tacos.png";
import beefVegetables from "../assets/images/mealMenuImages/Beef and Vegetables.png";
import grilledChicken from "../assets/images/mealMenuImages/Grilled Chicken.png";
import grilledSalmonVegetables from "../assets/images/mealMenuImages/Grilled Salmon with Vegetables.png";
import beefShortRibsMashedPotatoes from "../assets/images/mealMenuImages/Beef Short Ribs with Mashed Potatoes.png";
import grilledSalmonBroccoliRice from "../assets/images/mealMenuImages/Grilled Salmon with Broccoli and Rice.png";
import { Link } from "react-router-dom";

// Map the product names to the imported images

const productImages: { [key: string]: string } = {
  "Sweet & Spicy Beef Teriyaki Noodles": sweetSpicyBeefTeriyakiNoodles,
  "Classic Beef and Rice": classicBeefRice,
  "Beef Tacos": beefTacos,
  "Beef and Vegetables": beefVegetables,
  "Grilled Chicken": grilledChicken,
  "Grilled Salmon with Vegetables": grilledSalmonVegetables,
  "Beef Short Ribs with Mashed Potatoes": beefShortRibsMashedPotatoes,
  "Grilled Salmon with Broccoli and Rice": grilledSalmonBroccoliRice,
};

interface mealMenu {
  mealMenuList: FoodItems[];
  handleSetVariables: (tempId: number, tempType: string) => void;
}
const MealMenu: React.FC<mealMenu> = ({ mealMenuList, handleSetVariables }) => {
  return (
    <div className="centerMealMenu">
      <div className="mealMenu">
        <div className="tittleMealMenu">
          <h2>THE MENU</h2>
        </div>
        <div className="mealMenuList">
          {mealMenuList.map((i) => (
            <Link to="/product" className="productLink" key={i.productId}>
              <div
                className="outerCover"
                key={i.productId}
                onClick={() => {
                  handleSetVariables(i.productId, i.productType);
                }}
              >
                <div className="productImg">
                  <img src={productImages[i.productName]} alt={i.productName} />
                </div>
                <div className="productName">
                  <p>{i.productName}</p>
                </div>
                <div className="productPrice">
                  <p>R {i.productPrice.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealMenu;
