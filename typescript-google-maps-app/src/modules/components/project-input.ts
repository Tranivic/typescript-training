import {HTMLRelated} from '../abstracts/abstracts'
import { GeocodeDataFetched } from "../interfaces/geo-location-respose";
import axios from "axios";
import {projectMap} from '../../main'

export class ProjectInput extends HTMLRelated {
    private formElement: HTMLElement;
    private labelElement: HTMLLabelElement;
    private inputElement: HTMLInputElement;
    private buttonElement: HTMLButtonElement;
  
    constructor(formId: string) {
      super();
      this.formElement = document.getElementById(formId)!;
      this.labelElement = document.createElement("label");
      this.inputElement = document.createElement("input");
      this.buttonElement = document.createElement("button");
      this.configure();
      this.renderOnDOM();
    }
  
    renderOnDOM() {
      this.formElement.appendChild(this.labelElement);
      this.formElement.appendChild(this.inputElement);
      this.formElement.appendChild(this.buttonElement);
    }
  
    configure() {
      this.labelElement.innerText = "Put an address";
      this.inputElement.type = "text";
      this.buttonElement.type = "submit";
      this.buttonElement.innerText = "Send Address";
      this.formElement.addEventListener("submit", (e) => {
        const userInputData: string = this.inputElement.value;
        e.preventDefault();
        this.submitLocation(userInputData);
      });
    }
  
    submitLocation(userLocation: string) {
      axios
        .get<GeocodeDataFetched>(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
            userLocation
          )}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`
        )
        .then((response) => {
          projectMap.zoomInSelectedLocation(
            response.data.results[0].geometry.location
          );
        })
        .catch((err) => {
          alert(err);
        });
    }
  }