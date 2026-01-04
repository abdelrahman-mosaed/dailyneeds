import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DailyCardComponent } from './components/daily-card/daily-card.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DailyCardComponent,
    PrayerComponent,
    WeatherComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
