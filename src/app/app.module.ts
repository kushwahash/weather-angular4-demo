import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { CityService } from './service/city/city.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
