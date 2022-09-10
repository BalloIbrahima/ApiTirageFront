import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-import-tire',
  templateUrl: './import-tire.component.html',
  styleUrls: ['./import-tire.component.scss']
})
export class ImportTireComponent implements OnInit {

   //declaration des variables
   nbrPostulantNew:Number;
   libelle:String;
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
   newTirage(f:NgForm){
     
   }

}
