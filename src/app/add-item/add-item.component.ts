import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddItemService } from '../services/add-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  addItemForm:FormGroup;
  constructor(private itemService: AddItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      category: new FormControl(''),
      desc: new FormControl(''),
      price: new FormControl(''),
      title: new FormControl(''),
    })
  }

  addItem(data: any){
    this.itemService.sendData(data);
    this.router.navigate(['/home'])
  }

  // getData(){
  //   this.itemService.getData(this.route.snapshot.params.id){

  //   }
  // }

}
