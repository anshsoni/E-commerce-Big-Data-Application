import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeConfigService } from '../services/homeconfig.service';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  deliveries: any[] = [
    {value: 'Standard-0', viewValue: 'Standard'},
    {value: 'Same-1', viewValue: 'Same Day'},
    {value: 'Two-Days', viewValue: '2 Days'}
  ];
  constructor(private route: ActivatedRoute, private homeConfigService: HomeConfigService , public snackBar: MatSnackBar) { }
  private itemDetails: any = [];
  getDetails(id: any) {
    console.log(id);
    this.homeConfigService.getEachItem(id)
      .subscribe((data: any) => {
        console.log(data['items']);
        this.itemDetails = data['items'];
      });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      this.getDetails(params.id);
    });
  }

}
