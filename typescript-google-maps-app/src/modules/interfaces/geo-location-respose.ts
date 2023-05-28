export interface GeocodeData {
    results: {
      address_components: {
        long_name: string;
        short_name: string;
        types: string[];
      }[];
      formatted_address: string;
      geometry: {
        bounds: {
          northeast: {
            lat: number;
            lng: number;
          };
          southwest: {
            lat: number;
            lng: number;
          };
        };
        location: {
          lat: number;
          lng: number;
        };
        location_type: string;
        viewport: {
          northeast: {
            lat: number;
            lng: number;
          };
          southwest: {
            lat: number;
            lng: number;
          };
        };
      };
      partial_match: boolean;
      place_id: string;
      types: string[];
    }[];
    status: number;
    statusText: string;
    headers: {
      'cache-control': string;
      'content-length': string;
      'content-type': string;
      expires: string;
      pragma: string;
    };
    config: {
      transitional: {
        silentJSONParsing: boolean;
        forcedJSONParsing: boolean;
        clarifyTimeoutError: boolean;
      };
      adapter: string[];
      transformRequest: any[];
      transformResponse: any[];
      timeout: number;
      xsrfCookieName: string;
      xsrfHeaderName: string;
      maxContentLength: number;
      maxBodyLength: number;
      env: any;
      headers: {
        Accept: string;
      };
      method: string;
      url: string;
    };
    request: {};
  }