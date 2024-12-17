import Milkshake from "../assets/images/snackMenuImages/Milkshake.png";
import Sundae from "../assets/images/snackMenuImages/Sundae.png";
import Popsicles from "../assets/images/snackMenuImages/Popsicles.png";
import Cake from "../assets/images/snackMenuImages/Cake.png";
import Fries from "../assets/images/snackMenuImages/Fries.png";
import CakeSlice from "../assets/images/snackMenuImages/Cake Slice.png";
import Parfait from "../assets/images/snackMenuImages/Parfait.png";
import sweetSpicyBeefTeriyakiNoodles from "../assets/images/mealMenuImages/Sweet & Spicy Beef Teriyaki Noodles.png";
import classicBeefRice from "../assets/images/mealMenuImages/Classic Beef and Rice.png";
import beefTacos from "../assets/images/mealMenuImages/Beef Tacos.png";
import beefVegetables from "../assets/images/mealMenuImages/Beef and Vegetables.png";
import grilledChicken from "../assets/images/mealMenuImages/Grilled Chicken.png";
import grilledSalmonVegetables from "../assets/images/mealMenuImages/Grilled Salmon with Vegetables.png";
import beefShortRibsMashedPotatoes from "../assets/images/mealMenuImages/Beef Short Ribs with Mashed Potatoes.png";
import grilledSalmonBroccoliRice from "../assets/images/mealMenuImages/Grilled Salmon with Broccoli and Rice.png";
import FoodItems from "./FoodItems";
import "../styles/Product.css";

const theProductImage: { [key: string]: string } = {
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

interface TheProductProps {
  product: FoodItems[];
  id: number;
}
const TheProduct: React.FC<TheProductProps> = ({ product, id }) => {
  return (
    <>
      {product
        .filter((i) => i.productId === id)
        .map((i) => (
          <div className="innerStructure" key={i.productId}>
            <div className="productImg">
              <img
                src={theProductImage[i.productName]}
                alt={i.productDescription}
              />
            </div>
            <div className="productShopDetails">
              <div className="productName">
                <h2>{i.productName}</h2>
              </div>
              <div className="productDescription">
                <h4>{i.productDescription}</h4>
              </div>
              <div className="productFunctions">
                <div className="priceAndQuatity">
                  <div className="quatity">
                    <p>Quatity:</p>
                    <input type="text" />
                  </div>

                  <div className="price">
                    <p>Price: R {i.productPrice}</p>
                  </div>
                </div>
                <div className="addToCart">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TheProduct;
