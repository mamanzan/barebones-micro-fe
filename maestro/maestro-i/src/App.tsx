import { Link, Route, Routes } from "react-router-dom";
import { VegetableButton } from "shared";

export const App = () => {
  return (
    <>
      <h1>React Front End 2 (Vegetables)</h1>
      <nav>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to="/react-front-end-2">Home</Link>
          </li>
          <li>
            <Link to="vegetable-button">Vegetable Button</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h3>Home of MFE 2</h3>} />
        <Route path="/react-front-end-2" element={<h3>Home of MFE 2</h3>} />
        {/* Super important not to add the slash */}
        <Route
          path="vegetable-button"
          element={<VegetableButton vegetable="carrot" />}
        />
        <Route path="*" element={<h1>Nothing to see here</h1>} />
      </Routes>
    </>
  );
};
export default App;
