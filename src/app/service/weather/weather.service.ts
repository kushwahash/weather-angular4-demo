import { Injectable } from '@angular/core';
import { Weather } from '../../components/weather/weather';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }
    init() {
    }
}
