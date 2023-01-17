export type FruitType = "apple" | "orange" | "banana";
export interface FruitButtonProps {
  fruit: FruitType;
}

import "./FruitButton.scss";

//Note: if you don't export this and later say its the default, MFE blows up
export const FruitButton = ({ fruit = "apple" }: FruitButtonProps) => {
  const selectFruit = (fruit: FruitType): string => {
    let result = "";
    switch (fruit) {
      case "apple":
        result = "🍎";
        break;
      case "banana":
        result = "🍌";
        break;
      case "orange":
        result = "🍊";
        break;
    }
    return result;
  };

  return (
    <button className={`fruit-button ${fruit}`}>{selectFruit(fruit)}</button>
  );
};

export default FruitButton;
