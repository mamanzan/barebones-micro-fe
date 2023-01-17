import React from "react";
import FruitButton from "./components/atoms/FruitButton";
import VegetableButton from "./components/atoms/VegetableButton";

export const App = () => {
  return (
    <>
      <h3>Fruit Button</h3>
      <FruitButton fruit="apple" />
      <h3>Vegetable Button</h3>
      <VegetableButton vegetable="carrot" />
    </>
  );
};
export default App;
