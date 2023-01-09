import FruitButton from "./components/FruitButton";
import VegetableButton from "./components/VegetableButton";

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
