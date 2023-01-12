import { jsx as _jsx } from "react/jsx-runtime";
import "./FruitButton.scss";
//Note: if you don't export this and later say its the default, MFE blows up
export const FruitButton = ({ fruit = "apple" }) => {
    const selectFruit = (fruit) => {
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
    return (_jsx("button", { className: `fruit-button ${fruit}`, children: selectFruit(fruit) }));
};
export default FruitButton;
//# sourceMappingURL=FruitButton.js.map