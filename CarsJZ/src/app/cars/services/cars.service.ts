import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Car} from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carApiUrl = "http://localhost:3000/cars";

  constructor(private http: HttpClient) { }

  getCars() : Observable<Car[]> {
    return this.http.get<Car[]>(this.carApiUrl);
  }

  addCar(car: Car) {
    return this.http.post(this.carApiUrl, car);
  }

  deleteCar(id: number) {
    return this.http.delete(this.carApiUrl + `/${id}`);
  }

  updateCar(id: number, car: Car) {
    return this.http.put(this.carApiUrl + `/${id}`, car);
  }

}
