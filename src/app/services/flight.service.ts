import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  selectedFlight: Flight

  flight: Flight[] = [];

  readonly url_api = "http://localhost:3000/api/vuelos";

  constructor(private http: HttpClient) {
    this.selectedFlight = new Flight();
  }

  getFlight() {
    return this.http.get(this.url_api);
  }

  postFlight(Flight : Flight){
    return this.http.post(this.url_api , Flight);
  }

  putFlight(Flight : Flight){
    return this.http.put(this.url_api + `/${Flight.Year}/${Flight._id}` , Flight)
  }

  deleteFlight(Flight : Flight , id : String){
    return this.http.delete(this.url_api + `/${Flight.Year}/${Flight._id}`);
  }

}
