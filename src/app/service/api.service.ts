import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    this.urlAnalyseCreate = 'http://192.168.43.165:8080/analyse/create';
    this.urlAnalyseList = 'http://192.168.43.165:8080/analyse/list/rererr';
  }

  public createAnalyse(analyse: Analyse): Observable<any> {
    return this.http.post(this.urlAnalyseCreate, analyse);
  }
  public listAnalyse(): Observable<any> {
    return this.http.get(this.urlAnalyseList);
  }
}
