import './style.css';
import typescriptLogo from '../src/typescript.svg';
import viteLogo from '../src/vite.svg';

class ProjectPage {
  private appElement: HTMLElement;
  private projectTitle: HTMLElement;
  private tsIcon: HTMLImageElement;
  private vtIcon: HTMLImageElement;

  constructor(divId: string) {
    this.appElement = document.getElementById(divId)!;
    this.projectTitle = document.createElement('h1');
    this.tsIcon = document.createElement('img');
    this.vtIcon = document.createElement('img');
    this.configure();
  }

  renderOnDOM() {
    this.appElement.insertAdjacentElement('afterbegin', this.projectTitle);
    this.appElement.insertAdjacentElement('afterbegin', this.tsIcon);
    this.appElement.insertAdjacentElement('afterbegin', this.vtIcon);
  }

  configure() {
    this.projectTitle.innerText = 'Google Maps API - APP';
    this.tsIcon.src = typescriptLogo;
    this.vtIcon.src = viteLogo;
    this.tsIcon.classList.add('logo');
    this.vtIcon.classList.add('logo');
    this.renderOnDOM();
  }
}

class ProjectInput {
  private formElement: HTMLElement;
  private labelElement: HTMLLabelElement;
  private inputElement: HTMLInputElement;
  private buttonElement: HTMLButtonElement;

  constructor(formId: string) {
    this.formElement = document.getElementById(formId)!;
    this.labelElement = document.createElement('label');
    this.inputElement = document.createElement('input');
    this.buttonElement = document.createElement('button');
    this.renderOnDOM();
    this.configure();
  }

  renderOnDOM() {
    this.formElement.appendChild(this.labelElement);
    this.formElement.appendChild(this.inputElement);
    this.formElement.appendChild(this.buttonElement);
  }

  configure() {
    this.renderOnDOM();
    this.labelElement.innerText = 'Put a adress';
    this.inputElement.type = 'text';
    this.buttonElement.type = 'submit';
    this.buttonElement.innerText = 'Send Adress';
    this.formElement.addEventListener('submit', () => {
      console.log('test');
    });
  }
}

new ProjectPage('app');
new ProjectInput('form-input');
