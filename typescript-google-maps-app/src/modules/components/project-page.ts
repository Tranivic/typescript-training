import typescriptLogo from "../../typescript.svg";
import { HTMLRelated } from "../abstracts/abstracts";

export class ProjectPage extends HTMLRelated {
  private appElement: HTMLElement;
  private projectTitle: HTMLElement;
  private tsIcon: HTMLImageElement;

  constructor(divId: string) {
    super();
    this.appElement = document.getElementById(divId)!;
    this.projectTitle = document.createElement("h1");
    this.tsIcon = document.createElement("img");
    this.configure();
    this.renderOnDOM();
  }

  renderOnDOM() {
    this.appElement.insertAdjacentElement("afterbegin", this.tsIcon);
    this.appElement.insertAdjacentElement("afterbegin", this.projectTitle);
  }

  configure() {
    this.projectTitle.innerText = "Google Maps API - APP";
    this.tsIcon.src = typescriptLogo;
    this.tsIcon.classList.add("logo");
  }
}