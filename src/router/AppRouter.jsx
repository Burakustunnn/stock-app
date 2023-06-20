
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;