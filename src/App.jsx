import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { main_Routes } from "./routes/main-routes-data";
import { ShopSingle } from "./page/shop-single";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {main_Routes?.map((item, index) => (
          <Route
            index={item.path ? false : true}
            key={index}
            path={item.path}
            element={item.component}
          />
        ))}
        <Route path={"products/:id"} element={<ShopSingle />} />
      </Route>
    </Routes>
  );
}

export default App;
