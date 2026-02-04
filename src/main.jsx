import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import CreateAccountPage from "./Components/CreateAccountPage.jsx";
import RegisteredPage from "./Components/RegisteredPage.jsx";
import AccountSetting from "./Components/AccountSetting.jsx";
import PopXLogic from "./Store/PopXLogic.jsx";

const router = createHashRouter([
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
