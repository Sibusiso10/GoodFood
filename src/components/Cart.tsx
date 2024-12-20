import "../styles/Cart.css";
import "./CartObjects";
import CartObjects from "./CartObjects";
import NavBar from "./NavBar";
import ProductInCart from "./ProductInCart";
import FoodItems from "./FoodItems";
import { useEffect, useState } from "react";

interface CartProps {
  productsInCart: CartObjects[];
  numOfItemsInCart: number;
  mealMenuList: FoodItems[];
  snackMenuList: FoodItems[];
  handleDeleteItem: (id: number, type: string) => void;
}

const Cart: React.FC<CartProps> = ({
  productsInCart,
  numOfItemsInCart,
  mealMenuList,
  snackMenuList,
  handleDeleteItem,
}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tempTotal = 0;
    productsInCart.map((k) => {
      if (k.type === "meal") {
        mealMenuList.map((l) => {
          if (l.productId === k.id) {
            tempTotal += l.productPrice * k.quantity;
          }
        });
      } else {
        snackMenuList.map((l) => {
          if (l.productId === k.id) {
            tempTotal += l.productPrice * k.quantity;
          }
        });
      }
    });
    setTotal(tempTotal);
  }, [productsInCart]);

  return (
    <>
      <NavBar numOfItemsInCart={numOfItemsInCart} />
      <div className="centerTittle">
        <div className="cartTittle">
          <h2>YOUR FOOD</h2>
        </div>
      </div>
      <ProductInCart
        productsInCart={productsInCart}
        snackMenuList={snackMenuList}
        mealMenuList={mealMenuList}
        handleDeleteItem={handleDeleteItem}
      />
      <div className="centerTotalAndOrder">
        <div className="totalAndOrder">
          <div className="total">
            <p>Total : R{total.toFixed(2)}</p>
          </div>
          <div className="btnFororder">
            <button>PLACE YOUR ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
