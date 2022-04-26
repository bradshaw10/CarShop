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

  updateCar(name: any, price: any, id: any) {
    this.resetAlerts();

    console.log(name.value + price.value + id);
    this.carService.updateCar({
      model: name.value,
      price: price.value,
      id: +id
    }).subscribe(
      (res) => {
        this.success = `${name.value} updated`;
      },
      (err) => (
        this.error = `Error Updating ${name.value}: ${err}`
      )
    );
  }

  resetAlerts() {
    this.error = '';
    this.success = '';
  }
}
