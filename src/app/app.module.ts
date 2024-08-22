import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportComponent } from './admin/airport/airport.component';
import { AllFlightsComponent } from './admin/all-flights/all-flights.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { CityComponent } from './admin/city/city.component';
import { LoginComponent } from './admin/login/login.component';
import { NewFlightComponent } from './admin/new-flight/new-flight.component';
import { SearchComponent } from './website/search/search.component';
import { BookFlightComponent } from './website/book-flight/book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { MyBookingsComponent } from './website/my-bookings/my-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AllFlightsComponent,
    BookingsComponent,
    LayoutComponent,
    CityComponent,
    LoginComponent,
    NewFlightComponent,
    SearchComponent,
    BookFlightComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
