import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../admin/classes/city.model';
import {  Observable } from 'rxjs';
import { Flight } from '../admin/classes/flight.model';

@Injectable({
  providedIn: 'root'
})
export class DataFetchService {

  constructor(private http: HttpClient){}
  private baseUrl = '/api/FlightBooking';

  // async getAllCity(): Promise<City[]>{
  //   const res=await lastValueFrom(this.http.get<{message: string, result: boolean, data: City[]}>(`${this.baseUrl}/GetAllCity`));
  //   console.log("servicet: "+JSON.stringify(res.result));
  //   return res.data;
  // }
  getAllCity(): Observable<{message: string, result: boolean, data: City[]}>{
    return this.http.get<{message: string, result: boolean, data: City[]}>(`${this.baseUrl}/GetAllCity`);
  }

  bulkAddUpdateCity(city:City[]){
    return this.http.post(`${this.baseUrl}/AddUpdateBulkCity`,city);
  }

  getAllFlight(): Observable<{message: string, result: boolean, data: Flight[]}>{
    return this.http.get<{message: string, result: boolean, data: Flight[]}>(`${this.baseUrl}/GetAllAirport`);
  }

  bulkAddUpdateFlight(flight:Flight[]){
    return this.http.post(`${this.baseUrl}/AddUpdateBulkAirports`,flight);
  }

}
