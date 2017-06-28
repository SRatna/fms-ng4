import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
@Injectable()
export class DataService {
    constructor(private http : Http) {}

    getData(url : string, data : any) {
        return this
            .http
            .post(url, data);
    }
    getDatas(url : string) {
        return this
            .http
            .get(url);
    }
    saveData(url : string, data : object) {
        return this
            .http
            .post(url, data);
    }
    getDataByDateRange(url : string, data : any) {
        return this
            .http
            .post(url, data);
    }
    getDataById(url : string, id : any) {
        let fullUrl = url + '/' + id;
        return this
            .http
            .get(fullUrl)
    }
}