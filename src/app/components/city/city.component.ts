import { CityService } from '../../service/city/city.service';
import { DataService } from '../../service/data/data.service';
import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { Weather } from '../weather/weather';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  private cities: City[];
  weather: Weather;
  selectedCities: City;
  // tslint:disable-next-line:max-line-length
  constructor(private cityService: CityService, private dataService: DataService, private _ngZone: NgZone) {
   }

  ngOnInit() {
   this.getAllCityList();
   this.dataService.currentMessage.subscribe(weather => {console.log('In Subscribe Call for Not Weather-City');
     this._ngZone.run(() =>  {this.weather = weather; });

  });
  }

  getAllCityList() {
    this.cityService.findAllCities().subscribe(
      cities => {
        this.cities = cities;
      },
      err => {
        console.log(err);
      }
    );
  }
  public callWeatherService(city): void {
    console.log('In City Call weather');
    this.cityService.findWeatherByCity(city.value).subscribe(
      weather => {
        this.weather = weather;
        console.log(weather.currentTemperature);
        (this.dataService.changeMessage(this.weather, true));
      },
      err => {
        console.log(err);
      }
    );
  }
  public selectItem(event: any): void {
    this.selectedCities = event.target.value;
  }
}



