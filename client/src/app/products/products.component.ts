import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeConfigService } from '../services/homeconfig.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private homeConfigService: HomeConfigService, ) { }
  private itemDetails: any = [];
  getDetails(id: any) {
    console.log(id);
    this.homeConfigService.getEachItem(id)
      .subscribe((data: any) => {
        console.log(data['items']);
        this.itemDetails = data['items'];
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params);
      this.getDetails(params.id);
    });
  }

}
