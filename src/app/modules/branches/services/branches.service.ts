import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Branch} from '../classes/branch';

@Injectable()
export class BranchesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private brachesUrl = 'http://localhost/advanced/api/web/v1/branches';

  constructor(private http: Http) { }

  create(branch: Branch): Promise<Branch> {
    return this.http
      .post(this.brachesUrl, JSON.stringify(branch), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Branch)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
