/// <reference types="react" />
export type FruitType = "apple" | "orange" | "banana";
export interface FruitButtonProps {
    fruit: FruitType;
}
import "./FruitButton.scss";
export declare const FruitButton: ({ fruit }: FruitButtonProps) => JSX.Element;
export default FruitButton;
