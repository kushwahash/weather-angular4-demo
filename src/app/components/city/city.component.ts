import { CityService } from '../../service/city/city.service';
import { DataService } from '../../service/data/data.service';
import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityUS } from './cityUS';
import { Weather } from '../weather/weather';
import { NgZone } from '@angular/core';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  private cities: City[];
  private UScities: CityUS[];
  private filterCities: CityUS[];
  weather: Weather;
  selectedCities: City;
  inputCity: string;
  selectedUScities: CityUS;
  showList: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private cityService: CityService, private dataService: DataService, private _ngZone: NgZone) {
   }

  ngOnInit() {
   this.getAllUSCityList();
   this.dataService.currentMessage.subscribe(weather => {console.log('In Subscribe Call for Not Weather-City');
     this._ngZone.run(() =>  {this.weather = weather; });

  });
    this.showList = false;
    this.inputCity = '';
  }

  setValue(city) {
    this.inputCity = city.city;
    this.showList = false;
    this.filterCities.length = 0;
  }
  public filterCity(): void {
      if (this.inputCity.length < 3) {
        this.filterCities.length = 0;
        return;
      } else {
        this.filterCities = this.UScities.filter(
          selectedUScities => (selectedUScities.city.indexOf(this.inputCity) !== -1
            || selectedUScities.zip.indexOf(this.inputCity) !== -1)  );
      }
    if (this.filterCities.length > 1) {
      this.showList = true;
    }
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

  getAllUSCityList() {
    this.cityService.findAllUSCities().subscribe(
      UScities => {
        this.UScities = UScities;
      },
      err => {
        console.log(err);
      }
    );
  }

  public callWeatherService(city): void {
    console.log('In City Call weather');
    this.cityService.findWeatherByCity(city).subscribe(
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



