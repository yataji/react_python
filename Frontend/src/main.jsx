import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { DataUseContext } from "./Context/useContext.jsx";
import { DataLocalContext } from "./Context/useLocal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataUseContext>
      <DataLocalContext>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </DataLocalContext>
    </DataUseContext>
  </React.StrictMode>
);
