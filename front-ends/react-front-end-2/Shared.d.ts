declare module "Shared/Components" {
  export type FruitType = "apple" | "orange" | "banana";
  export interface FruitButtonProps {
    fruit: FruitType;
  }
  export const FruitButton: (props: FruitButtonProps) => JSX.Element;

  export type VegetableType = "carrot" | "potato" | "tomato";
  export interface VegetableButtonProps {
    vegetable: VegetableType;
  }
  export const VegetableButton: (props: VegetableButtonProps) => JSX.Element;
}
