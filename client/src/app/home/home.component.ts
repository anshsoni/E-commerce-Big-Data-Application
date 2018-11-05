import { Component, OnInit } from '@angular/core';
import { HomeConfigService } from '../services/homeconfig.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeConfigService: HomeConfigService) { }
  private config: any = [];

  showConfig() {
    this.homeConfigService.getConfig()
      .subscribe((data: any) => {
         console.log(data);
         this.config = data['items'];
         return this.config;
        });
  }
  ngOnInit() {
    this.showConfig();
  }

}
