import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {
  env=environment;

  constructor(private http:HttpClient) { }

  //methode pour la recuperation des postulants tirés d'un tirage
  getPostulant(id:Number):Observable<any>{
    return this.http.get(`${this.env.api}/postulant/get/${id}`);
  }
}
