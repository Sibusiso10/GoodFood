import React from "react";
import "../styles/Product.css";
import FoodItems from "./FoodItems";
import TheProduct from "./TheProduct";

interface ProductProps {
  mealMenuList: FoodItems[];
  dessertItems: FoodItems[];
  id: number;
  addNewProduct: (id: number, quantity: number, type: string) => void;
  type: string;
}

const Product: React.FC<ProductProps> = ({
  mealMenuList,
  dessertItems,
  id,
  type,
  addNewProduct,
}) => {
  return (
    <>
      <div className="productStage">
        {type === "meal" && (
          <TheProduct
            product={mealMenuList}
            id={id}
            addNewProduct={addNewProduct}
          />
        )}
        {type === "snack" && (
          <TheProduct
            product={dessertItems}
            id={id}
            addNewProduct={addNewProduct}
          />
        )}
      </div>
    </>
  );
};

export default Product;
