import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {
  //declaration des variables
  nbrPostulant:Number;
  nbrPostulantNew:Number;
  libelle:String;
  listeSelectionner:String;

  constructor() { }

  ngOnInit(): void {
  }

  newListe(f:NgForm){
    
  }


  //
  foods:any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
