import "../styles/ProductPage.css";
import Product from "./Product";
import FoodItems from "./FoodItems";
import NavBar from "./NavBar";
{
  /*import RelatedItems from "./RelatedItems";*/
}

interface ProductProps {
  mealMenuList: FoodItems[];
  dessertItems: FoodItems[];
  id: number;
  type: string;
  handleSetVariables: (tempId: number, tempType: string) => void;
}

const ProductPage: React.FC<ProductProps> = ({
  mealMenuList,
  dessertItems,
  id,
  type,
}) => {
  return (
    <>
      {/* handleSetVariables,*/}
      <NavBar />
      <div className="centerProductPage">
        <div className="productPage">
          <div className="theProduct">
            <Product
              mealMenuList={mealMenuList}
              dessertItems={dessertItems}
              id={id}
              type={type}
            />
          </div>
          {/*<RelatedItems
            mealMenuList={mealMenuList}
            dessertItems={dessertItems}
            id={id}
            type={type}
            handleSetVariables={handleSetVariables}
          />*/}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
