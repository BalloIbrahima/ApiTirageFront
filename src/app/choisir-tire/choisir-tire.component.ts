import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListeService } from '../services/Liste/liste.service';
import { TirageService } from '../services/Tirage/tirage.service';

@Component({
  selector: 'app-choisir-tire',
  templateUrl: './choisir-tire.component.html',
  styleUrls: ['./choisir-tire.component.scss']
})
export class ChoisirTireComponent implements OnInit {
  list:any;

    //declaration des variables
    nbrPostulant:Number;
    listeSelectionner:String;
  
    message:String;

    //variable qui doit indiquer s'il ya erreur ou pas
    erreur:false;
    constructor(public router:Router,public listeService:ListeService,public tirageService:TirageService) { }
  
    ngOnInit(): void {
      this.listeService.getListe().subscribe(donne=>{
        console.log(donne.message)
        console.log(donne.data.length)
  
        if(donne.message=="ok"){
          this.list=donne.data
        }
  
      })
    }
  
    newTirage(f2:NgForm){
        this.tirageService.Faire(this.listeSelectionner,this.nbrPostulant).subscribe(donne=>{

          for(let i=0; i<this.list.length;i++){
           

            if(this.list[i].libelle==this.listeSelectionner){
              console.log(this.list[i].libelle)
              console.log(this.listeSelectionner)
              console.log(this.list[i].id)
              this.router.navigate(["detailstirage"],this.list[i].id )
            }
          }
        })
    }
  
  
    //
    foods:any = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];

}
