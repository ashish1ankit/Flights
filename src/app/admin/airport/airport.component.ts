import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../../shared -services/data-fetch.service';
import { City } from '../classes/city.model';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent {
  flightList: any[]=[];
  
  constructor(private http: HttpClient,private dataService: DataFetchService){}
  
  ngOnInit(): void {
    this.loadAllFlights();
  }
  @Input() cityList: City[] = [];
  
  // getAllFlight(): void{
  //   this.http.get(`${this.baseUrl}/GetAllAirport`).subscribe((res:any) =>{
  //     this.flightList=res.data;
     
  //   });
  // }
  loadAllFlights(): void{
   
    this.dataService.getAllFlight().subscribe((res ) => {
     
    this.flightList=res.data;
    });
    }


  bulkUpdateFlight(){
      this.dataService.bulkAddUpdateFlight(this.flightList).subscribe((res:any) =>{
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
    "cityId": 0,
    "cityName": ""
  };
  this.flightList.unshift(obj);
  }
  
  }

