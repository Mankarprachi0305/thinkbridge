import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginData: string = '';

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  constructor() { }

  sendData(data:any){
    this.paramSource.next(data);
  }

  getData(){
    return this.loginData;  
  }
}
