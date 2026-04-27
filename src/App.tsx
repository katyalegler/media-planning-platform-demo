import { Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { LoginPage } from "./pages/LoginPage";
import { ExplorePage } from "./pages/ExplorePage";
import { PlanPage } from "./pages/PlanPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/plan/:planId" element={<PlanPage initialView="builder" />} />
        <Route path="/plans/:planId" element={<PlanPage initialView="result" />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
