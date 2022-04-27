import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from './car';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(private http: HttpClient) { }

    getAllCars() {
        return this.http.get(`${environment.baseUrl}/list.php`).pipe(
            map((res: any) => {
                return res['data']
            })
        );
    }

    storeCar(car: Car) {
        return this.http.post(`${environment.baseUrl}/storeData.php`, { data: car }).pipe(
            map((res: any) => {
                return res['data'];
            })

        );
    }

    updateCar(car: Car) {
        return this.http.put(`${environment.baseUrl}/updateCar.php`, { data: car });
    }

    deleteCar(id: any) {
        const params = new HttpParams()
            .set('id', id.toString());

        return this.http.delete(`${environment.baseUrl}/deleteCar.php`, { params: params });
    }
}