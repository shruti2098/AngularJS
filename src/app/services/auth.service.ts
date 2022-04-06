import { Injectable } from '@angular/core';
import { Data, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://localhost:44325/api/Authenticate/login'
  constructor(private http: HttpClient ,private router:Router) { }

proceedLogin(usercred:Data):Observable<Data>{
return this.http.post<Data>(this.apiurl,usercred)
}
}
