import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { CityService } from './service/city/city.service';
import { WeatherService } from './service/weather/weather.service';
import { DataService } from './service/data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CityService, WeatherService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
