import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  data: any;
  constructor(private cartService : CartService,) { }

  ngOnInit(): void {
    // this.cartService.sendData();
    this.cartService.sharedParam.subscribe(param => {
      console.log(param)
      this.data = param;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}
