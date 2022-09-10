import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-choisir-tire',
  templateUrl: './choisir-tire.component.html',
  styleUrls: ['./choisir-tire.component.scss']
})
export class ChoisirTireComponent implements OnInit {

    //declaration des variables
    nbrPostulant:Number;
    listeSelectionner:String;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    newTirage(f2:NgForm){
      
    }
  
  
    //
    foods:any = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];

}
