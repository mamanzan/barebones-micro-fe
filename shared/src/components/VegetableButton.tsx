export type VegetableType = "carrot" | "potato" | "tomato";
export interface VegetableButtonProps {
  vegetable: VegetableType;
}

import "./VegetableButton.scss";

//Note: if you don't export this and later say its the default, MFE blows up
export const VegetableButton = ({
  vegetable = "carrot",
}: VegetableButtonProps) => {
  const selectVegetable = (fruit: VegetableType): string => {
    let result = "";
    switch (fruit) {
      case "carrot":
        result = "🥕";
        break;
      case "potato":
        result = "🥔";
        break;
      case "tomato":
        result = "🍅";
        break;
    }
    return result;
  };

  return (
    <button className={`vegetable-button ${vegetable}`}>
      {selectVegetable(vegetable)}
    </button>
  );
};

export default VegetableButton;
