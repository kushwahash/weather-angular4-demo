import { CityService } from '../../service/city/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]
})
export class CityComponent implements OnInit {
  private cities: City[];
  constructor(private cityService: CityService) {
   }

  ngOnInit() {
    this.getAllCityList();
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
 }



