import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeConfigService {
    constructor(private http: HttpClient) {
    }
    configUrl = 'http://localhost:5000/products';
    getConfig() {
        return this.http.get<any>(this.configUrl);
    }
}
