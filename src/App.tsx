import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogIN from "./components/LogIN";
import SignIn from "./components/SignIn";
import { useState, useEffect } from "react";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import CartObjects from "./components/CartObjects";

const mealMenuList = [
  {
    productId: 1,
    productName: "Sweet & Spicy Beef Teriyaki Noodles",
    productPrice: 120.79,
    productDescription:
      "A delightful mix of sweet and spicy flavors with tender beef and noodles. Perfect for a quick and satisfying meal.",
    productType: "meal",
  },
  {
    productId: 2,
    productName: "Classic Beef and Rice",
    productPrice: 15.49,
    productDescription:
      "Tender beef chunks served with a side of fluffy white rice. A classic dish with a rich and savory sauce.",
    productType: "meal",
  },
  {
    productId: 3,
    productName: "Beef Tacos",
    productPrice: 12.99,
    productDescription:
      "Flavorful beef tacos topped with fresh vegetables and a tangy sauce. A perfect blend of textures and tastes.",
    productType: "meal",
  },

  {
    productId: 4,
    productName: "Beef and Vegetables",
    productPrice: 18.59,
    productDescription:
      "Succulent beef in a rich, savory sauce served with a side of vegetables. A hearty and satisfying meal.",
    productType: "meal",
  },
  {
    productId: 5,
    productName: "Grilled Chicken",
    productPrice: 13.99,
    productDescription:
      "Grilled chicken with a crispy exterior and juicy interior. Served with a side of dipping sauce.",
    productType: "meal",
  },
  {
    productId: 6,
    productName: "Grilled Salmon with Vegetables",
    productPrice: 21.99,
    productDescription:
      "Perfectly grilled salmon with a side of fresh vegetables. A healthy and delicious option.",
    productType: "meal",
  },
  {
    productId: 7,
    productName: "Beef Short Ribs with Mashed Potatoes",
    productPrice: 23.49,
    productDescription:
      "Tender beef short ribs served over creamy mashed potatoes. A comforting and flavorful dish.",
    productType: "meal",
  },
  {
    productId: 8,
    productName: "Grilled Salmon with Broccoli and Rice",
    productPrice: 21.99,
    productDescription:
      "Grilled salmon served with a side of steamed broccoli and rice. A nutritious and tasty meal.",
    productType: "meal",
  },
];
const dessertItems = [
  {
    productId: 121,
    productName: "Milkshake",
    productPrice: 42.99,
    productDescription:
      "A milkshake with cookies and cream, topped with whipped cream and a striped straw.",
    productType: "snack",
  },
  {
    productId: 122,
    productName: "Sundae",
    productPrice: 12.99,
    productDescription:
      "A sundae with ice cream, chocolate sauce, and whipped cream, served in a metal dish.",
    productType: "snack",
  },
  {
    productId: 123,
    productName: "Popsicles",
    productPrice: 15.99,
    productDescription:
      "Six chocolate-covered popsicles with whipped cream on a dark background.",
    productType: "snack",
  },
  {
    productId: 124,
    productName: "Cake",
    productPrice: 20.99,
    productDescription:
      "A slice of cake with a creamy filling and a dusting of powdered sugar.",
    productType: "snack",
  },
  {
    productId: 125,
    productName: "Fries",
    productPrice: 30.99,
    productDescription:
      "A serving of fries with herbs and a dipping sauce on the side.",
    productType: "snack",
  },
  {
    productId: 126,
    productName: "Cake Slice",
    productPrice: 25.99,
    productDescription:
      "A slice of chocolate cake with a creamy filling and cookie crumbs on top.",
    productType: "snack",
  },
  {
    productId: 127,
    productName: "Parfait",
    productPrice: 10.99,
    productDescription:
      "Two parfait glasses filled with layers of cream, caramel, and chocolate.",
    productType: "snack",
  },
];
function App() {
  const [id, setId] = useState(0);
  const [type, setType] = useState("");
  const [items, setItem] = useState<CartObjects[]>([]);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  useEffect(() => {
    const savedId = localStorage.getItem("id");
    const savedType = localStorage.getItem("type");
    if (savedId) setId(Number(savedId));
    if (savedType) setType(savedType);
  }, []);

  const setVariables = (tempId: number, tempType: string) => {
    setId(tempId);
    setType(tempType);
  };

  const handleDeleteItem = (id: number, type: string) => {
    const updatedItems = items.filter((i) => !(i.id === id && i.type === type));
    setItem(updatedItems);
    decrement();
  };

  const handleSetVariables = (tempId: number, tempType: string) => {
    setId(tempId);
    setType(tempType);
    localStorage.setItem("id", String(tempId));
    localStorage.setItem("type", tempType);
    setVariables(tempId, tempType);
  };

  const increment = () => {
    setNumOfItemsInCart(numOfItemsInCart + 1);
  };

  const decrement = () => {
    setNumOfItemsInCart(numOfItemsInCart - 1);
  };
  const addNewProduct = (id: number, quantity: number, type: string) => {
    // Check if the item exists in the cart
    const existingItem = items.find((i) => i.id === id && i.type === type);
    if (existingItem) {
      // If the item exists, update its quantity
      const updatedItems = items.map((i) =>
        i.id === id && i.type === type
          ? { ...i, quantity: i.quantity + quantity }
          : i
      );
      setItem(updatedItems);
    } else {
      // If the item does not exist, add it to the cart
      const newProduct: CartObjects = { id, quantity, type };
      setItem([...items, newProduct]);
      increment();
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              mealMenuList={mealMenuList}
              dessertItems={dessertItems}
              handleSetVariables={handleSetVariables}
              numOfItemsInCart={numOfItemsInCart}
            />
          }
        />
        <Route path="/login" element={<LogIN />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/product"
          element={
            <ProductPage
              mealMenuList={mealMenuList}
              dessertItems={dessertItems}
              id={id}
              type={type}
              handleSetVariables={handleSetVariables}
              addNewProduct={addNewProduct}
              numOfItemsInCart={numOfItemsInCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              productsInCart={items}
              numOfItemsInCart={numOfItemsInCart}
              mealMenuList={mealMenuList}
              snackMenuList={dessertItems}
              handleDeleteItem={handleDeleteItem}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
