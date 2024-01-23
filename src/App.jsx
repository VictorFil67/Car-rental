// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./Pages/HomePage/HomePage";
import { Catalog } from "./Pages/CatalogPage/CatalogPage";
import { FavoritesPage } from "./Pages/FavoritesPage/FavoritesPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Car Rental</h1> */}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
