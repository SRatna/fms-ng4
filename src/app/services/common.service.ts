import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(obj: any, url: string): Observable<any> {
    // console.log(obj);
    return this.http
      .post(url, JSON.stringify(obj), {headers: this.headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  remove(obj: any, url: string): Observable<any> {
    return this.http
      .delete(`${url}/${obj.id}`)
      .map((res: Response) => obj)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getObjects(url: string): Observable<any[]> {
    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  checkDuplicity(obj: any, url: string): Observable<any> {
    return this.http
      .post(`${url}/${obj.name}`, JSON.stringify(obj), {headers: this.headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getServer(): string{
    return 'http://local.dev:9090/api/';
  }
}

