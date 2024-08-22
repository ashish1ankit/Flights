import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{
  private baseUrl = '/api/FlightBooking';
cityList: any[]=[];

constructor(private http: HttpClient){}

ngOnInit(): void {
  this.getAllCity();
}

getAllCity(){
  this.http.get(`${this.baseUrl}/GetAllCity`).subscribe((res:any) =>{
    this.cityList=res.data;
   
  })
}

}
