import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

//pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/productos",
    element: <ProductsPage />,
  },
  {
    path: "/productos/:id",
    element: <ProductDetailPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Toaster richColors/>
  <RouterProvider router={router} />
  </>
  
);
