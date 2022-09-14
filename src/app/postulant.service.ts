import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulant } from './postulant';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  private baseUrl = "http://localhost:8080/postulant/read";

  constructor(private http: HttpClient) { }
  
  getPostulant(): Observable<Postulant[]>{
    return this.http.get<Postulant[]>(`${this.baseUrl}`);
  }

  //foncytiin de recuperation de la liste
  getToutesListe():Observable<Object>{
    return this.http.get("http://localhost:8080/listePostulant/AfficherListe");
  }

}
