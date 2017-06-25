import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class DataService {
    constructor(private http: Http) { }
    getData(url: string, data: any) {
        return this.http.post(url, data);
    }
}