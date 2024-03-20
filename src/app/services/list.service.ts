import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = "http://localhost:8080";
  //Header
  // private httpOptions: any = {
  //   headers: new HttpHeaders({
  //     "Access-Control-Allow-Origin": "http://localhost:4200"
  //   }),
  // }

  constructor(
    private http:HttpClient,
  ) { }

  getList(): Observable<string> {
    return this.http.get<string>(`${this.url}/index`,{headers: new HttpHeaders().set("Access-Control-Allow-Origin","http://localhost:4200/")});
  }
}
