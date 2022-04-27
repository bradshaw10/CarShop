import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { Alert, Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginError: boolean = false;

  loginModel: Login = {
    Username: '',
    Password: ''
  }

  alert: Alert = {
    type: 'success',
    message: 'Logged in'
  }

  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.login.login(this.loginModel).subscribe(
      (res: Login) => {
        this.loginError = true;
        this.alert.message = 'Logged In Ok';
        this.alert.type = 'success';
      },
      (err) => {
        this.loginError = true;
        this.alert.message = `Error Logging in: ${err.message}`;
        this.alert.type = 'danger';
      }
    );

  }

}
