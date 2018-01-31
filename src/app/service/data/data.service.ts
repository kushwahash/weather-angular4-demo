import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Weather } from '../../components/weather/weather';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<Weather>(new Weather('cold', '2', '4', '5', 'IN', '7', '12', '3', '44', '12'));
  private messageSource2 = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  constructor() { }

  changeMessage(message: Weather, message2: boolean) {
    this.messageSource.next(message);
    this.messageSource2.next(message2);
  }
}
