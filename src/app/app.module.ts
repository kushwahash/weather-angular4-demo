import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CityComponent } from './components/city/city.component';
import { CityService } from './service/city/city.service';
import { WeatherService } from './service/weather/weather.service';
import { DataService } from './service/data/data.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2AutoCompleteModule
  ],
  providers: [CityService, WeatherService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
