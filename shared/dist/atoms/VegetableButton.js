import { jsx as _jsx } from "react/jsx-runtime";
import "./VegetableButton.scss";
//Note: if you don't export this and later say its the default, MFE blows up
export const VegetableButton = ({ vegetable = "carrot", }) => {
    const selectVegetable = (fruit) => {
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
    return (_jsx("button", { className: `vegetable-button ${vegetable}`, children: selectVegetable(vegetable) }));
};
export default VegetableButton;
//# sourceMappingURL=VegetableButton.js.map