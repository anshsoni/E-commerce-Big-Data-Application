import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeConfigService {
    constructor(private http: HttpClient) {
    }
    homeUrl = 'http://localhost:5000/products';
    getAll() {
        return this.http.get<any>(this.homeUrl);
    }
    getEachItem(id: any) {
        const productURL = this.homeUrl + '/' + id;
        return this.http.get<any>(productURL);
    }
}
