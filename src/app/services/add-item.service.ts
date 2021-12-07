import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddItemService {
  loginData: string = '';

  private paramSource = new BehaviorSubject(null);
  sharedParam = this.paramSource.asObservable();

  private data: any = [];

  constructor() { }

  sendData(data:any){
    this.paramSource.next(data);
  }

  getData(id: number){
    return id;  
  }

  removeProduct(product: any){
    this.data.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.data.splice(index,1);
      }
    })
    this.paramSource.next(this.data);
  }
}
