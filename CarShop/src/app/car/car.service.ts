import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class CarService {

    baseUrl = 'http://localhost/api';

    constructor(private http: HttpClient) { }

    getAllCars() {
        return this.http.get(`${this.baseUrl}/list.php`).pipe(
            map((res: any) => {
                return res['data']
            })
        );
    }

    storeCar(car: Car) {
        return this.http.post(`${this.baseUrl}/storeData.php`, { data: car }).pipe(
            map((res: any) => {
                return res['data'];
            })

        );
    }

    updateCar(car: Car) {
        return this.http.put(`${this.baseUrl}/updateCar.php`, { data: car });
    }

    deleteCar(id: any) {
        const params = new HttpParams()
            .set('id', id.toString());

        return this.http.delete(`${this.baseUrl}/deleteCar.php`, { params: params });
    }
}