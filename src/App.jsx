import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
      </Routes>
    </>
  );
}

export default App;
