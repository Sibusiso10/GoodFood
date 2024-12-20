import React from "react";
import "../App.css";
import HeroSection from "./HeroSection";
import MealMenu from "./MealMenu";
import NavBar from "./NavBar";
import SecondBanner from "./SecondBanner";
import SnackMenu from "./SnackMenu";
import FoodItems from "./FoodItems";

interface Menus {
  mealMenuList: FoodItems[];
  dessertItems: FoodItems[];
  handleSetVariables: (tempId: number, tempType: string) => void;
  numOfItemsInCart: number;
}

const HomePage: React.FC<Menus> = ({
  mealMenuList,
  dessertItems,
  handleSetVariables,
  numOfItemsInCart,
}) => {
  return (
    <>
      <NavBar numOfItemsInCart={numOfItemsInCart} />
      <HeroSection />
      <MealMenu
        mealMenuList={mealMenuList}
        handleSetVariables={handleSetVariables}
      />
      <SecondBanner />
      <SnackMenu
        snackMenuList={dessertItems}
        handleSetVariables={handleSetVariables}
      />
    </>
  );
};

export default HomePage;
