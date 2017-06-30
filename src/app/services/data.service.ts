import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DataService {
    constructor(private http: Http) {

    }

    // createAuthorizationHeader(header: Headers) {
    //     const token = localStorage.getItem('currentUser');
    //     header.append.apply('auth-token',token);
    // }
    private jwt() {
        // create authorization header with jwt token
        let currentUser = localStorage.getItem('currentUser');
        if (currentUser) {
            let headers = new Headers({
                'auth-token': currentUser
            });
            return new RequestOptions({ headers: headers });
        }
    }

    getData(url: string, data: any) {
        console.log()
        return this
            .http
            .post(url, data,this.jwt());
    }
    getDatas(url: string) {
        return this
            .http
            .get(url,this.jwt());
    }
    saveData(url: string, data: object) {
        return this
            .http
            .post(url, data,this.jwt());
    }
    getDataByDateRange(url: string, data: any) {
        return this
            .http
            .post(url, data,this.jwt());
    }
    getDataById(url: string, id: number) {
        let fullUrl = url + '/' + id;
        return this
            .http
            .get(fullUrl,this.jwt());
    }
    deleteData(url: string, id: any) {
        let fullUrl = url + '/' + id;
        return this.http
            .delete(fullUrl, this.jwt());
    }
    updateData(url: string, id: any,data:any) {
        let fullUrl = url + '/' + id;
        return this.http.patch(fullUrl, data, this.jwt());
    }
}