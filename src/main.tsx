import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./App";


const container = document.getElementById("root");

if(container === null) {
    throw new Error("root is missing");
}

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)