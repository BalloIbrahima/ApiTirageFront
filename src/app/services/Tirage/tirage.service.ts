import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  //declarations des variables
  env=environment;

  constructor(private http:HttpClient) { }

  //methode pour la création d'un tirage
  create(libelle:String,nombre:Number,excel:File,libelleTirage:String):Observable<any>{
    const data:FormData=new FormData();
    data.append('file',excel);
    return this.http.post(`${this.env.api}/listePostulant/create/${libelle}/${nombre}/${libelleTirage}`,data);
  }

   //methode pour la recuperation des postulants tirés d'un tirage
  getTirages(id:Number):Observable<any>{
    return this.http.get(`${this.env.api}/postulant/${id}`);
  }

  //methode pour la recuperation le nombre de tirage
  getNombre():Observable<any>{
    return this.http.get(`${this.env.api}/trie/nombre`);
  }

  //methode pour la création d'un tirage
  Faire(libelle:String,nombre:Number,libelleTirage:String):Observable<any>{

    return this.http.get(`${this.env.api}/trie/${libelle}/${nombre}/${libelleTirage}`);
  }

}
