import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchConfigService {
    constructor(private http: HttpClient) {
    }
    searchUrl = 'http://localhost:5000/search';

    getSearchResults(query: any) {
        const searchQUrl = this.searchUrl + '?q=' + query;
        return this.http.get<any>(searchQUrl);
    }
}
