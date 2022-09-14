import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from './tirage';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  private baseUrl = "http://localhost:8080/trie/AfficherListeParTirage";

  constructor(private http: HttpClient) { }
  
  getTirage(id:number): Observable<Tirage[]>{
    return this.http.get<Tirage[]>(`${this.baseUrl}/${id}`);
  }

  getTirageParLibelleListe(libelleListe: string):Observable<Tirage[]>{
    return this.http.get<Tirage[]>(`http://localhost:8080/trie/AfficherTirageParListe/${libelleListe}`);
  }

}
