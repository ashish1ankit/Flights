import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent {
  private baseUrl = '/api/FlightBooking';
  flightList: any[]=[];
  cityList: any[]=["Ahmedabad"];
  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    // this.getAllFlights();
  }
  
  getAllFlights(){
    this.http.get(`${this.baseUrl}/GetAllAirport`).subscribe((res:any) =>{
      this.flightList=res.data;
     
    });
  }
  
  bulkUpdateFlight(){
    this.http.post(`${this.baseUrl}/AddUpdateBulkAirports`, this.flightList).subscribe((res:any) =>{
     if(res.status === 200)
      alert("Flight Add/Update success");
    else
    alert(res.message);
     
    });
  }
  addNewFlight(){
  const obj= {
    "airportId": 0,
    "airportCode": "",
    "airportName": "",
    "cityId": 0
  };
  this.flightList.unshift(obj);
  }
  
  }

