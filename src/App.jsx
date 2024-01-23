import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./Pages/HomePage/HomePage";
import { Catalog } from "./Pages/CatalogPage/CatalogPage";
import { FavoritesPage } from "./Pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <>
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
