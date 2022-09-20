import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detailsliste } from './detailsliste';

@Injectable({
  providedIn: 'root'
})
export class DetailslisteService {

  private baseUrl = "http://localhost:8080/postulant/read";

  constructor(private http: HttpClient) { }
  
  getDetailsliste(): Observable<Detailsliste[]>{
    return this.http.get<Detailsliste[]>(`${this.baseUrl}`);
  }
}
