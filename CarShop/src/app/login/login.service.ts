import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(params: Login) {
    return this.http.post(`${environment.baseUrl}/login.php`, { params: params }).pipe(
      map(
        (res: any) => {
          return res['data'];
        }
      )
    );
  }
}
