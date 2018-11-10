import { Component, OnInit } from '@angular/core';
import { HomeConfigService } from '../services/homeconfig.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeConfigService: HomeConfigService, public router: Router) { }
  private products: any = [];

  showConfig() {
    this.homeConfigService.getAll()
      .subscribe((products: any) => {
        //  console.log(data);
        this.products = products['items'];
        return this.products;
      });
  }

  public gotoProductDetailsV2(url, id) {
    const myurl = `${url}/${id}`;
    console.log(myurl);

    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
  ngOnInit() {
    this.showConfig();
  }

}
