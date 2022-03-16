import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Analyse } from '../model/analyse';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlAnalyseCreate = '';
  urlAnalyseList = '';
  constructor(
    private http: HttpClient
  ) {
    this.urlAnalyseCreate = 'http://localhost:8080/analyse/create';
    this.urlAnalyseList = 'http://localhost:8080/analyse/list/rererr';
  }

  public createAnalyse(analyse: Analyse): Observable<any> {
    return this.http.post(this.urlAnalyseCreate, analyse);
  }
  public listAnalyse(): Observable<any> {
    return this.http.get(this.urlAnalyseList);
  }
}
