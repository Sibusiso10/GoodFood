import "../styles/ProductPage.css";
import Product from "./Product";
import FoodItems from "./FoodItems";
import NavBar from "./NavBar";
import RelatedItems from "./RelatedItems";

interface ProductProps {
  mealMenuList: FoodItems[];
  dessertItems: FoodItems[];
  id: number;
  type: string;
  handleSetVariables: (tempId: number, tempType: string) => void;
  addNewProduct: (id: number, quantity: number, type: string) => void;
  numOfItemsInCart: number;
}

const ProductPage: React.FC<ProductProps> = ({
  mealMenuList,
  dessertItems,
  id,
  type,
  handleSetVariables,
  addNewProduct,
  numOfItemsInCart,
}) => {
  return (
    <>
      <NavBar numOfItemsInCart={numOfItemsInCart} />
      <div className="centerProductPage">
        <div className="productPage">
          <div className="theProduct">
            <Product
              mealMenuList={mealMenuList}
              dessertItems={dessertItems}
              id={id}
              type={type}
              addNewProduct={addNewProduct}
            />
          </div>
          <div className="theRelatedProducts">
            <RelatedItems
              mealMenuList={mealMenuList}
              dessertItems={dessertItems}
              id={id}
              type={type}
              handleSetVariables={handleSetVariables}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
