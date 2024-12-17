import "../styles/RelatedItems.css";
import FoodItems from "./FoodItems";
import Items from "./Items";

interface RelatedProductProps {
  mealMenuList: FoodItems[];
  dessertItems: FoodItems[];
  id: number;
  type: string;
  handleSetVariables: (tempId: number, tempType: string) => void;
}

const RelatedItems: React.FC<RelatedProductProps> = ({
  mealMenuList,
  dessertItems,
  id,
  type,
  handleSetVariables,
}) => {
  return (
    <>
      <div className="relatedProductittle">
        <h4>RELATED DISHES</h4>
      </div>
      <div className="relatedItemContainer">
        {type === "meal" && (
          <div className="relatedProductList">
            <Items
              item={mealMenuList}
              handleSetVariables={handleSetVariables}
              id={id}
            />
          </div>
        )}
        {type === "snack" && (
          <div className="relatedProductList">
            <Items
              item={dessertItems}
              handleSetVariables={handleSetVariables}
              id={id}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default RelatedItems;
