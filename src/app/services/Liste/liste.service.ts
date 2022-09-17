import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListeService {

    liste:any=[];

  //declarations des variables
  env=environment;

  constructor(private http:HttpClient) { }

  //methode pour la création d'une liste
  create(libelle:String,nombre:Number,excel:File):Observable<any>{
    const data:FormData=new FormData();
    data.append('file',excel);
    return this.http.post(`${this.env.api}/listePostulant/create/${libelle}/${nombre}`,data);
  }

  //methode pour la recuperation des listes
  getListe():Observable<any>{
    return this.http.get(`${this.env.api}/listePostulant/list`);
  }

  //methode pour la recuperation du nombre de liste
  getNombreListe():Observable<any>{
    return this.http.get(`${this.env.api}/listePostulant/nombre`);
  }

  //methode pour la recuperation des tirages d'une liste
  getTirages(id:Number):Observable<any>{
    return this.http.get(`${this.env.api}/trie/${id}`);
  }


}
