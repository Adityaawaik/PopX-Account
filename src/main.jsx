import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccountPage from "./Components/CreateAccountPage.jsx";
import RegisteredPage from "./Components/RegisteredPage.jsx";
import PopXLogic from "./Store/PopXLogic.jsx";
import AccountSetting from "./Components/AccountSetting.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/createAccount", element: <CreateAccountPage /> },
  { path: "/registeredAccount", element: <RegisteredPage /> },
  { path: "/accountCreated", element: <AccountSetting /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PopXLogic>
      <RouterProvider router={router} />
    </PopXLogic>
  </StrictMode>
);
