import { Component, OnInit } from '@angular/core';
import { AddItemService } from '../services/add-item.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableData: any = [];

  isEditable: boolean;

  data: any;

  // displayedColumns: string[] = ['id','category', 'description', 'image', 'title', 'name'];
  // dataSource = this.tableData;

  constructor(private apiService: ApiService, private addItem: AddItemService) { }

  ngOnInit(): void {
    this.apiService.getProduct().subscribe(res => {
      console.log(res)
      this.tableData = res;
    })

    this.addItem.sharedParam.subscribe(res => {
      this.data = res;
    })
    
  }

  delete(data: any){
    this.addItem.removeProduct(data);
  }

}
