import { Link } from "react-router-dom";
import FoodItems from "./FoodItems";
import sweetSpicyBeefTeriyakiNoodles from "../assets/images/mealMenuImages/Sweet & Spicy Beef Teriyaki Noodles.png";
import classicBeefRice from "../assets/images/mealMenuImages/Classic Beef and Rice.png";
import beefTacos from "../assets/images/mealMenuImages/Beef Tacos.png";
import beefVegetables from "../assets/images/mealMenuImages/Beef and Vegetables.png";
import grilledChicken from "../assets/images/mealMenuImages/Grilled Chicken.png";
import grilledSalmonVegetables from "../assets/images/mealMenuImages/Grilled Salmon with Vegetables.png";
import beefShortRibsMashedPotatoes from "../assets/images/mealMenuImages/Beef Short Ribs with Mashed Potatoes.png";
import grilledSalmonBroccoliRice from "../assets/images/mealMenuImages/Grilled Salmon with Broccoli and Rice.png";
import Milkshake from "../assets/images/snackMenuImages/Milkshake.png";
import Sundae from "../assets/images/snackMenuImages/Sundae.png";
import Popsicles from "../assets/images/snackMenuImages/Popsicles.png";
import Cake from "../assets/images/snackMenuImages/Cake.png";
import Fries from "../assets/images/snackMenuImages/Fries.png";
import CakeSlice from "../assets/images/snackMenuImages/Cake Slice.png";
import Parfait from "../assets/images/snackMenuImages/Parfait.png";

const productImages: { [key: string]: string } = {
  "Sweet & Spicy Beef Teriyaki Noodles": sweetSpicyBeefTeriyakiNoodles,
  "Classic Beef and Rice": classicBeefRice,
  "Beef Tacos": beefTacos,
  "Beef and Vegetables": beefVegetables,
  "Grilled Chicken": grilledChicken,
  "Grilled Salmon with Vegetables": grilledSalmonVegetables,
  "Beef Short Ribs with Mashed Potatoes": beefShortRibsMashedPotatoes,
  "Grilled Salmon with Broccoli and Rice": grilledSalmonBroccoliRice,
  Milkshake: Milkshake,
  Sundae: Sundae,
  Popsicles: Popsicles,
  Cake: Cake,
  Fries: Fries,
  "Cake Slice": CakeSlice,
  Parfait: Parfait,
};

interface ItemsProps {
  item: FoodItems[];
  id: number;
  handleSetVariables: (tempId: number, tempType: string) => void;
}

const Items: React.FC<ItemsProps> = ({ item, handleSetVariables, id }) => {
  return (
    <>
      {item
        .filter((i) => i.productId != id)
        .map((i) => (
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
    </>
  );
};

export default Items;
