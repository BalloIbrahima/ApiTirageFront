import { Component, OnInit } from '@angular/core';
import { ListeService } from '../services/Liste/liste.service';
import { TirageService } from '../services/Tirage/tirage.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  nombreList:Number=0;
  nombreTirage:Number=0;

  constructor(public listeService:ListeService,public tirageService:TirageService) { }

  ngOnInit(): void {
    //recupeartion de l'ensemble des listes
    this.listeService.getListe().subscribe(donne=>{
      console.log(donne.message)
      console.log(donne.data.length)

      if(donne.message=="ok"){
        this.listeService.liste=donne.data
      }

    })

    //recupeartion du nombre de tirage
    this.tirageService.getNombre().subscribe(donne=>{
      console.log(donne.message)
      console.log(donne.data.length)

      if(donne.message=="ok"  && donne.data!=null){
        this.nombreTirage=donne.data
      }

    })

    //recupeartion du nombre de listes
    this.listeService.getNombreListe().subscribe(donne=>{
      console.log(donne.data.length)
      if(donne.message=="ok"  && donne.data!=null){
        this.nombreList=donne.data
      }

    })
  }





}
