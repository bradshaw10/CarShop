import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];

  car: Car = {
    model: '',
    price: 0
  };

  error = '';
  success = '';

  constructor(private carService: CarService) { }

  ngOnInit(): void {

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

  addCar(form: NgForm) {
    this.resetAlerts();

    this.carService.storeCar(this.car).subscribe(
      (res: Car) => {
        this.cars.push(res);

        this.success = `${this.car.model} Added`;

        form.reset();
      },
      (err) => (this.error = `${this.car.model} failed: ${err.message}`)
    );
  }

  resetAlerts() {
    this.error = '';
    this.success = '';
  }
}
