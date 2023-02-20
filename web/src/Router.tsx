import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { SignIn_Bad1 } from "./pages/SignIn_Bad1";
import { SignIn_Good1 } from "./pages/SignIn_Good1";
import { SignUp } from "./pages/SignUp";
import { SuperMarket } from "./pages/Supermarket";
import { ProductInfo } from "./pages/Supermarket/ProductInfo";
import { ProductsFiltered } from "./pages/Supermarket/ProductsFiltered";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn_Bad1 />} />
      <Route path="/SignIn_Good1" element={<SignIn_Good1 />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/SuperMarket" element={<SuperMarket />} />
      <Route path="/SuperMarket/ProductInfo" element={<ProductInfo />} />
      <Route
        path="/SuperMarket/ProductsFiltered"
        element={<ProductsFiltered />}
      />
    </Routes>
  );
}
