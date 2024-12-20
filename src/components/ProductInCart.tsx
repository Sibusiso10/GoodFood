import "../styles/Cart.css";
import CartObjects from "./CartObjects";
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
import closeIcon from "../assets/svgs/closeIcon.svg";
import FoodItems from "./FoodItems";

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

interface ProductCartProps {
  productsInCart: CartObjects[];
  mealMenuList: FoodItems[];
  snackMenuList: FoodItems[];
  handleDeleteItem: (id: number, type: string) => void;
}

const ProductInCart: React.FC<ProductCartProps> = ({
  productsInCart,
  mealMenuList,
  snackMenuList,
  handleDeleteItem,
}) => {
  return (
    <>
      <div className="centerProductsInCart">
        <div className="ProductInCart">
          {productsInCart.map((i) => (
            <div className="cartProductContainer" key={i.id}>
              {i.type === "meal" &&
                mealMenuList
                  .filter((j) => i.id === j.productId)
                  .map((j) => (
                    <div className="container" key={j.productId}>
                      <div className="imgOfProduct">
                        <img
                          src={theProductImage[j.productName]}
                          alt={j.productDescription}
                          key={j.productId}
                        />
                      </div>
                      <div className="productName">
                        <p>{j.productName}</p>
                      </div>
                      <div className="deleteAndinformation">
                        <div className="delete">
                          <img
                            src={closeIcon}
                            alt="Close icon"
                            onClick={() => handleDeleteItem(i.id, i.type)}
                          />
                        </div>
                        <div className="quanity">
                          <p>Qantity: {i.quantity}</p>
                        </div>
                        <div className="price">
                          <p>R {j.productPrice}</p>
                        </div>
                      </div>
                    </div>
                  ))}

              {i.type === "snack" &&
                snackMenuList
                  .filter((j) => i.id === j.productId)
                  .map((j) => (
                    <div className="container" key={j.productId + 20}>
                      <div className="imgOfProduct">
                        <img
                          src={theProductImage[j.productName]}
                          alt={j.productDescription}
                          key={j.productId}
                        />
                      </div>
                      <div className="productName">
                        <p>{j.productName}</p>
                      </div>
                      <div className="deleteAndinformation">
                        <div className="delete">
                          <img
                            src={closeIcon}
                            alt="Close icon"
                            onClick={() => handleDeleteItem(i.id, i.type)}
                          />
                        </div>
                        <div className="quanity">
                          <p>Qantity: {i.quantity}</p>
                        </div>
                        <div className="price">
                          <p>R {j.productPrice}</p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductInCart;
