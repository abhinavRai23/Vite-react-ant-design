import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./main.css";
import "./style.less";

const root = createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
