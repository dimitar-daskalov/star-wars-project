import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import ToastProvider from "./providers/ToastProvider.tsx";
import { router } from "./utils/router.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>
);
