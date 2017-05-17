import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Department } from '../classes/department';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DepartmentsService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private departmentsUrl = 'http://localhost/advanced/api/web/v1/departments';

  constructor(private http: Http) { }

  create(department: Department): Observable<Department> {
    return this.http
      .post(this.departmentsUrl, JSON.stringify(department), {headers: this.headers})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteDepartment(department: Department): Observable<Department> {
    return this.http
      .delete(`${this.departmentsUrl}/${department.id}`)
      .map((res: Response) => department)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get(this.departmentsUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

