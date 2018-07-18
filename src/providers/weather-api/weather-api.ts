import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherApiProvider {
  apiKey = '963e72e2cca4112ac593c6a5a811ede4';
  url;
  units: 'units=metric&',
  lang: 'lang=fr&',
  urlIcon: 'http://openweathermap.org/img/w/'

  constructor(public http: HttpClient) {
    console.log('Hello WeatherApiProvider Provider');
    this.url ='http://api.openweathermap.org/data/2.5/';
  }

  urlNow() {
    return this.http.get(this.url + 'weather?' + this.apiKey + this.units + + this.lang)
      .map(res => res.json());
  },

}
