import "../styles/SnackMenu.css";
import FoodItems from "../components/FoodItems";
import Milkshake from "../assets/images/snackMenuImages/Milkshake.png";
import Sundae from "../assets/images/snackMenuImages/Sundae.png";
import Popsicles from "../assets/images/snackMenuImages/Popsicles.png";
import Cake from "../assets/images/snackMenuImages/Cake.png";
import Fries from "../assets/images/snackMenuImages/Fries.png";
import CakeSlice from "../assets/images/snackMenuImages/Cake Slice.png";
import Parfait from "../assets/images/snackMenuImages/Parfait.png";
import { Link } from "react-router-dom";
// Map the product names to the imported images

const productImages: { [key: string]: string } = {
  Milkshake: Milkshake,
  Sundae: Sundae,
  Popsicles: Popsicles,
  Cake: Cake,
  Fries: Fries,
  "Cake Slice": CakeSlice,
  Parfait: Parfait,
};

interface snackMenu {
  snackMenuList: FoodItems[];
  handleSetVariables: (tempId: number, tempType: string) => void;
}
const SnackMenu: React.FC<snackMenu> = ({
  snackMenuList,
  handleSetVariables,
}) => {
  return (
    <div className="centersnackMenu">
      <div className="snackMenu">
        <div className="tittlesnackMenu">
          <h2>THE SNACKS MENU</h2>
        </div>
        <div className="snackMenuList">
          {snackMenuList.map((i) => (
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

export default SnackMenu;
