import "./style.css";
import { GoogleMap } from "./modules/components/google-map";
import { ProjectInput } from "./modules/components/project-input";
import { ProjectPage } from "./modules/components/project-page";

new ProjectPage("app");
new ProjectInput("form-input");
export const projectMap = new GoogleMap();
