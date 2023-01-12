/// <reference types="react" />
export type VegetableType = "carrot" | "potato" | "tomato";
export interface VegetableButtonProps {
    vegetable: VegetableType;
}
import "./VegetableButton.scss";
export declare const VegetableButton: ({ vegetable, }: VegetableButtonProps) => JSX.Element;
export default VegetableButton;
