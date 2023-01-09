import { Link, Route, Routes } from "react-router-dom";
import { FruitButton } from "Shared/Components";

export const App = () => {
  return (
    <>
      <h1>React Front End 1 (Fruits)</h1>
      <nav>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to="/react-front-end-1">Home</Link>
          </li>
          <li>
            <Link to="fruit-button">Fruit Button</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h3>Home of MFE 1</h3>} />
        <Route path="/react-front-end-1" element={<h3>Home of MFE 1</h3>} />
        {/* Super important not to add the slash */}
        <Route path="fruit-button" element={<FruitButton fruit="banana" />} />
        <Route path="*" element={<h1>Nothing to see here</h1>} />
      </Routes>
    </>
  );
};
export default App;
