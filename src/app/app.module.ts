import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import {CityService} from './city.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
