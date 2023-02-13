import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn_Bad1 } from "./pages/SignIn_Bad1";
import { SignIn_Good1 } from "./pages/SignIn_Good1";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn_Bad1 />} />
      <Route path="/SignIn_Good1" element={<SignIn_Good1 />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
