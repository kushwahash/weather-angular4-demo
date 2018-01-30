import { Injectable } from '@angular/core';
import { City } from '../../components/city/city';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService {
  private apiUrl = 'http://localhost:8080/users';
  constructor(private http: Http) { }
    init() {
    }

   findAllCities(): Observable<City[]>  {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
