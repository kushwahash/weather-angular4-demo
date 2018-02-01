import { Injectable } from '@angular/core';
import { City } from '../../components/city/city';
import { CityUS } from '../../components/city/cityUS';
import { Http, Response } from '@angular/http';
import { Weather } from '../../components/weather/weather';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService {
  private cityapiUrl = '../getCityList';
  private cityUSapiUrl = '../getUSCityList';
  private weatherapiUrl = '../getDefaultWeatherByCity';

  constructor(private http: Http) { }
    init() {
    }

   findAllCities(): Observable<City[]>  {
    return this.http.get(this.cityapiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findAllUSCities(): Observable<CityUS[]>  {
    return this.http.get(this.cityUSapiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  findWeatherByCity(city: string): Observable<Weather>  {
    const q = '?city='.concat(city);
    return this.http.get(this.weatherapiUrl.concat(q))
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
