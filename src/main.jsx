import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import AuthProvider from "./provider/AuthProvider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={AppRouter} />
        </AuthProvider>
    </StrictMode>
);
