import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { SignIn2 } from "./pages/SignIn2";
import { SignIn1 } from "./pages/SignIn1";
import { SignUp } from "./pages/SignUp";
import { SuperMarket } from "./pages/Supermarket";
import { ProductInfo } from "./pages/Supermarket/ProductInfo";
import { ProductsFiltered } from "./pages/Supermarket/ProductsFiltered";
import { Cart } from "./pages/Supermarket/Cart";
import { Delivery } from "./pages/Supermarket/Delivery";
import { ProductsSearched } from "./pages/Supermarket/ProductsSearched";
import { HistoryActions } from "./pages/HistoryActions";
import { Educational } from "./pages/Educational";
import { MainTopics } from "./pages/Educational/MainTopics";
import { QuizGame } from "./pages/Educational/QuizGame";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn2 />} />
      <Route path="/SignIn1" element={<SignIn1 />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/HistoryActions" element={<HistoryActions />} />
      <Route path="/SuperMarket" element={<SuperMarket />} />
      <Route path="/SuperMarket/ProductInfo" element={<ProductInfo />} />
      <Route
        path="/SuperMarket/ProductsFiltered"
        element={<ProductsFiltered />}
      />
      <Route
        path="/SuperMarket/ProductsSearched"
        element={<ProductsSearched />}
      />
      <Route path="/SuperMarket/Cart" element={<Cart />} />
      <Route path="/SuperMarket/Delivery" element={<Delivery />} />
      <Route path="/Educational" element={<Educational />} />
      <Route path="/Educational/MainTopics" element={<MainTopics />} />
      <Route path="/Educational/QuizGame" element={<QuizGame />} />
    </Routes>
  );
}
