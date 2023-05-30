import { Loader } from "@googlemaps/js-api-loader"
import {HTMLRelated} from '../abstracts/abstracts'
export class GoogleMap extends HTMLRelated {
    private mapAreaElement: HTMLElement;
    private loader: any;
  
    constructor() {
      super();
      this.mapAreaElement = document.getElementById("map-area")!;
      this.configure();
    }
  
    protected configure() {
      this.loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      });
      this.renderOnDOM();
    }
  
    public zoomInSelectedLocation(userLocation: { lat: number; lng: number }) {
      const map = new google.maps.Map(this.mapAreaElement as HTMLElement, {
        center: userLocation,
        zoom: 16,
      });
      new google.maps.Marker({ position: userLocation, map: map });
    }
  
    protected renderOnDOM() {
      this.loader.load().then(() => {
        new google.maps.Map(this.mapAreaElement as HTMLElement, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      });
    }
  }