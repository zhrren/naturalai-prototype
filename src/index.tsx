import "reflect-metadata";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import {Router} from "@router/Router";
import {InjectConfig} from "@config/InjectConfig";

InjectConfig.configure();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Router />);
reportWebVitals();
