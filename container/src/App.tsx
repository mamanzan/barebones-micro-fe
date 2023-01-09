import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NavLinks } from "./components/NavLinks";
import { Layout } from "./components/Layout";
//const { App: ReactFe1App } = React.lazy(() => import("ReactFe1/App"));
//import { ReactFe1App } from "ReactFe2/App";
const ReactFe1App = React.lazy(() => import("ReactFe1/App"));
const ReactFe2App = React.lazy(() => import("ReactFe2/App"));
//const { App: ReactFe2App } = React.lazy(() => import("ReactFe2/App"));

const App = () => (
  <>
    <h1>FE Container</h1>
    <NavLinks />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route
        path="/react-front-end-1/*"
        element={
          <Suspense fallback={<h1>One moment...</h1>}>
            <ReactFe1App />
          </Suspense>
        }
      />
      <Route
        path="/react-front-end-2/*"
        element={
          <Suspense fallback={<h1>One moment...</h1>}>
            <ReactFe2App />
          </Suspense>
        }
      />
    </Routes>
  </>
);

export default App;
