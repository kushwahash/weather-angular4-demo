export class Weather {

  description: string;
  minTemperature: string;
  maxTemperature: string;
  currentTemperature: string;
  country: string;
  humidity: string;
  city: string;
  sunRise: string;
  sunSet: string;
  icon: string;


  // tslint:disable-next-line:max-line-length
  constructor(description: string, minTemperature: string, maxTemperature: string, currentTemperature: string, country: string, humidity: string,
  city: string, sunRise: string, sunSet: string, icon: string) {
    this.description = description;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
    this.currentTemperature = currentTemperature;
    this.country = country;
    this.humidity = humidity;
    this.city = city;
    this.sunRise = sunRise;
    this.sunSet = sunSet;
    this.icon = icon;
  }

}
