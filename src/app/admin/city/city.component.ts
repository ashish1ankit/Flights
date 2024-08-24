import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { DataFetchService } from '../../shared -services/data-fetch.service';
import { City } from '../classes/city.model';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit{
  public cityList: City[]=[];

constructor(private http: HttpClient,private dataService: DataFetchService){
  
}

ngOnInit(): void {
  this.loadAllCities();
}


loadAllCities(): void{
this.dataService.getAllCity().subscribe((res ) => {
this.cityList=res.data;
});
}

// async loadAllCities(): Promise<void> {
// this.cityList=await this.dataService.getAllCity();
// console.log(this.cityList.length);
// }

bulkUpdateCity(){

  this.dataService.bulkAddUpdateCity(this.cityList).subscribe((res:any) =>{
   if(res.status === 200)
    alert("City Add/Update success");
  else
  alert(res.message);
   
  });
}

addNewCity(){
const obj={
cityId:0,
cityName:''
};
this.cityList.unshift(obj);
}

}
