import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Branch} from '../classes/branch';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BranchesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private branchesUrl = 'http://localhost/advanced/api/web/v1/branches';

  constructor(private http: Http) { }

  create(branch: Branch): Observable<Branch> {
    return this.http
      .post(this.branchesUrl, JSON.stringify(branch), {headers: this.headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBranches(): Observable<Branch[]> {
    return this.http.get(this.branchesUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
