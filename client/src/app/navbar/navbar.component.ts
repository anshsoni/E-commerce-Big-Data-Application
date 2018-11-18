import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SearchConfigService } from '../services/searchconfig.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  values = '';
  constructor(private searchconfigservice: SearchConfigService, public router: Router) { }
  onKey(event: KeyboardEvent) {
    this.values = (<HTMLInputElement>event.target).value;
    this.options = ['four', 'Two', 'Three'];
    this.searchconfigservice.getSearchResults(this.values)
      .subscribe((data: any) => {
        this.options = data.map(array => ({
          title: array['_source'].title,
          id: array['_source'].json.id
        }));
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
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

  }

  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      console.log(filterValue);
      return this.options.filter(option => option['title'].includes(filterValue));
  }

}
