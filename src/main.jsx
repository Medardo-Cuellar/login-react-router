import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

//pages
import HomePage from "./pages/HomePage";
import LoginPAge from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPAge />,
  },
  {
    path: "/productos",
    element: <p>Productos</p>,
  },
  {
    productos: "/productos/:id",
    element: <p>Producto</p>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Toaster />
  <RouterProvider router={router} />
  </>
  
);
