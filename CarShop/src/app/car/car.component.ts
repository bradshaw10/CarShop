import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  error = '';
  success = '';

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    console.log("init");
    this.getCars();
  }

  getCars(): void {
    console.log("getCars");
    this.carService.getAllCars().subscribe(
      (data: Car[]) => {
        this.cars = data;
        this.success = 'Data Received';
      },
      (err) => {
        this.error = err;
      }
    )
  }
}
