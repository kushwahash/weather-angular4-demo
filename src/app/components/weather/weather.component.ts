import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../service/weather/weather.service';
import { DataService } from '../../service/data/data.service';
import { Weather } from './weather';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
title = 'Weather Report';
  weather: Weather;
  notloaded: boolean;
  date: Date;
  constructor(private weatherService: WeatherService, private dataService: DataService, private _ngZone: NgZone ) {

  }


  ngOnInit() {
    // tslint:disable-next-line:max-line-length
     this.dataService.currentMessage.subscribe(weather => {console.log('In Subscribe Call for Weather');
     this._ngZone.run(() =>  {this.weather = weather; });

  });
     this.dataService.currentMessage2.subscribe(notloaded => {console.log('In Subscribe Call for Not Loaded');
     this._ngZone.run(() =>  {this.notloaded = notloaded; });

  });
   // this.dataService.currentMessage.subscribe(weather => {this.weather = weather; console.log(this.weather.currentTemperature); });
   // this.dataService.currentMessage2.subscribe(notloaded => {this.notloaded = notloaded; console.log(this.notloaded); });
    this.date = new Date();
    this.notloaded = false;
    console.log('In NGONit Call for Weather');
  }

  setStyleClasses() {
    const styleClass = {
            'wrapper': true,
            'wrappermist': (this.weather.icon === '50d' || this.weather.icon === '50n'),
            'wrapperclearsky': (this.weather.icon === '01d' || this.weather.icon === '01n')
        };
        return styleClass;
  }
}
