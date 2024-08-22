import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './website/search/search.component';
import { BookFlightComponent } from './website/book-flight/book-flight.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { AirportComponent } from './admin/airport/airport.component';
import { AllFlightsComponent } from './admin/all-flights/all-flights.component';
import { CityComponent } from './admin/city/city.component';
import { LoginComponent } from './admin/login/login.component';
import { NewFlightComponent } from './admin/new-flight/new-flight.component';

const routes: Routes = [
{
  path: '',
  redirectTo:'serarch',
  pathMatch:'full'
},{
  path:'search',
  component:SearchComponent,
  title: 'Search Flight'
},{
  path:'book-flight',
  component:BookFlightComponent,
  title: 'Book New Ticket'
},{
  path:'Bookings',
  component:BookingsComponent,
  title:'My Bookings'
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'',
  component:LayoutComponent,
  children:[
    {
      path:'airport',
      component:AirportComponent

    },{
      path:'all-bookings',
      component:BookingsComponent
    },{
      path:'city',
      component:CityComponent
    },{
      path:'new-flight',
      component:NewFlightComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
