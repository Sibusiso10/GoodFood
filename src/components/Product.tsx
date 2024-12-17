import React from "react";
import "../styles/Product.css";
import FoodItems from "./FoodItems";
import TheProduct from "./TheProduct";

interface ProductProps {
  mealMenuList: FoodItems[];
  dessertItems: FoodItems[];
  id: number;
  type: string;
}

const Product: React.FC<ProductProps> = ({
  mealMenuList,
  dessertItems,
  id,
  type,
}) => {
  return (
    <>
      <div className="productStage">
        {type === "meal" && <TheProduct product={mealMenuList} id={id} />}
        {type === "snack" && <TheProduct product={dessertItems} id={id} />}
      </div>
    </>
  );
};

export default Product;
