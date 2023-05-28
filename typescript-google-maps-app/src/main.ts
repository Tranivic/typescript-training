import './style.css';
import typescriptLogo from '../src/typescript.svg';
import { HTMLRelated } from './modules/abstracts/abstracts';
import { GeocodeData } from './modules/interfaces/geo-location-respose';
import axios from 'axios';

class ProjectPage extends HTMLRelated {
  private appElement: HTMLElement;
  private projectTitle: HTMLElement;
  private tsIcon: HTMLImageElement;
  private mapAreaElement: HTMLDivElement;

  constructor(divId: string) {
    super();
    this.appElement = document.getElementById(divId)!;
    this.projectTitle = document.createElement('h1');
    this.tsIcon = document.createElement('img');
    this.mapAreaElement = document.createElement('div');
    this.configure();
    this.renderOnDOM();
  }

  renderOnDOM() {
    this.appElement.insertAdjacentElement('afterbegin', this.tsIcon);
    this.appElement.insertAdjacentElement('afterbegin', this.projectTitle);
    this.appElement.insertAdjacentElement('beforeend', this.mapAreaElement);
  }

  configure() {
    this.projectTitle.innerText = 'Google Maps API - APP';
    this.tsIcon.src = typescriptLogo;
    this.tsIcon.classList.add('logo');
    this.mapAreaElement.classList.add('map-area');
  }
}

class ProjectInput extends HTMLRelated {
  private formElement: HTMLElement;
  private labelElement: HTMLLabelElement;
  private inputElement: HTMLInputElement;
  private buttonElement: HTMLButtonElement;

  constructor(formId: string) {
    super();
    this.formElement = document.getElementById(formId)!;
    this.labelElement = document.createElement('label');
    this.inputElement = document.createElement('input');
    this.buttonElement = document.createElement('button');
    this.configure();
    this.renderOnDOM();
  }

  renderOnDOM() {
    this.formElement.appendChild(this.labelElement);
    this.formElement.appendChild(this.inputElement);
    this.formElement.appendChild(this.buttonElement);
  }

  configure() {
    this.labelElement.innerText = 'Put an address';
    this.inputElement.type = 'text';
    this.buttonElement.type = 'submit';
    this.buttonElement.innerText = 'Send Address';
    this.formElement.addEventListener('submit', (e) => {
      const userInputData: string = this.inputElement.value;
      e.preventDefault();
      this.submitLocation(userInputData);
    });
  }

  submitLocation(userLocation: string) {
    console.log(userLocation);
    const GOOGLE_API_KEY = 'IN ENV FILE (HIDEN)';

    axios
      .get<GeocodeData>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(userLocation)}&key=${GOOGLE_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

new ProjectPage('app');
new ProjectInput('form-input');
