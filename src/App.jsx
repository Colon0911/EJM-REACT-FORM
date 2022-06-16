import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayouts from "./layouts/AuthLayouts";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./hooks/useAuth";

//Primer Route= Area Publica
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayouts />}>
            <Route index element={<Login />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
