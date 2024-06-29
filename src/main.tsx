import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App.tsx";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer />
  </StrictMode>
);
