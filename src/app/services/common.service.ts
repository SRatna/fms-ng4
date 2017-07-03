import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommonService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public district = [
    "achham",
    "arghakhanchi",
    "baglung",
    "baitadi",
    "bajhang",
    "bajura",
    "banke",
    "bara",
    "bardiya",
    "bhaktapur",
    "bhojpur",
    "chitwan",
    "dadeldhura",
    "dailekh",
    "dang deukhuri",
    "darchula",
    "dhading",
    "dhankuta",
    "dhanusa",
    "dholkha",
    "dolpa",
    "doti",
    "gorkha",
    "gulmi",
    "humla",
    "ilam",
    "jajarkot",
    "jhapa",
    "jumla",
    "kailali",
    "kalikot",
    "kanchanpur",
    "kapilvastu",
    "kaski",
    "kathmandu",
    "kavrepalanchok",
    "khotang",
    "lalitpur",
    "lamjung",
    "mahottari",
    "makwanpur",
    "manang",
    "morang",
    "mugu",
    "mustang",
    "myagdi",
    "nawalparasi",
    "nuwakot",
    "okhaldhunga",
    "palpa",
    "panchthar",
    "parbat",
    "parsa",
    "pyuthan",
    "ramechhap",
    "rasuwa",
    "rautahat",
    "rolpa",
    "rukum",
    "rupandehi",
    "salyan",
    "sankhuwasabha",
    "saptari",
    "sarlahi",
    "sindhuli",
    "sindhupalchok",
    "siraha",
    "solukhumbu",
    "sunsari",
    "surkhet",
    "syangja",
    "tanahu",
    "taplejung",
    "terhathum",
    "udayapur"
  ];
  public zone = [
    "bagmati",
    "bheri",
    "dhawalagiri",
    "gandaki",
    "janakpur",
    "karnali",
    "koshi",
    "lumbini",
    "mahakali",
    "mechi",
    "narayani",
    "rapti",
    "sagarmatha",
    "seti"
  ];

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

  getDistrict(){
    return this.http.get('./district.json');
  }

  getZone() {
    return this.http.get('./zone.json');
  }

  getServer(): string{
    return 'http://192.168.1.236:9090/api/';
  }
}

