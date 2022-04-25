import { HttpClient } from '@angular/common/http';
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
        return this.http.get('${this.baseUrl}/list').pipe(
            map((res: any) => {
                return res['data']
            })
        )
    }
}