import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LogIN from "./components/LogIN";
import SignIn from "./components/SignIn";
import { useState, useEffect } from "react";
import ProductPage from "./components/ProductPage";

const mealMenuList = [
  {
    productId: 1,
    productName: "Sweet & Spicy Beef Teriyaki Noodles",
    productPrice: 20.79,
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
    productId: 1,
    productName: "Milkshake",
    productPrice: 42.99,
    productDescription:
      "A milkshake with cookies and cream, topped with whipped cream and a striped straw.",
    productType: "snack",
  },
  {
    productId: 2,
    productName: "Sundae",
    productPrice: 12.99,
    productDescription:
      "A sundae with ice cream, chocolate sauce, and whipped cream, served in a metal dish.",
    productType: "snack",
  },
  {
    productId: 3,
    productName: "Popsicles",
    productPrice: 15.99,
    productDescription:
      "Six chocolate-covered popsicles with whipped cream on a dark background.",
    productType: "snack",
  },
  {
    productId: 4,
    productName: "Cake",
    productPrice: 20.99,
    productDescription:
      "A slice of cake with a creamy filling and a dusting of powdered sugar.",
    productType: "snack",
  },
  {
    productId: 5,
    productName: "Fries",
    productPrice: 30.99,
    productDescription:
      "A serving of fries with herbs and a dipping sauce on the side.",
    productType: "snack",
  },
  {
    productId: 6,
    productName: "Cake Slice",
    productPrice: 25.99,
    productDescription:
      "A slice of chocolate cake with a creamy filling and cookie crumbs on top.",
    productType: "snack",
  },
  {
    productId: 7,
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
  const handleSetVariables = (tempId: number, tempType: string) => {
    setId(tempId);
    setType(tempType);
    localStorage.setItem("id", String(tempId));
    localStorage.setItem("type", tempType);
    setVariables(tempId, tempType);
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
