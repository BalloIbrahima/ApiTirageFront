import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detailsliste } from './detailsliste';

@Injectable({
  providedIn: 'root'
})
export class DetailslisteService {

   baseUrl = "http://localhost:8080/trie/AfficherListeParTirage/";

  constructor(private http: HttpClient) { }
  
  getTirageAssocier(id:number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }



}
