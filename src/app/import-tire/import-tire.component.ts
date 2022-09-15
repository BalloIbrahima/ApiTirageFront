import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListeService } from '../services/Liste/liste.service';
import { TirageService } from '../services/Tirage/tirage.service';

@Component({
  selector: 'app-import-tire',
  templateUrl: './import-tire.component.html',
  styleUrls: ['./import-tire.component.scss']
})
export class ImportTireComponent implements OnInit {

    //declaration des variables
    nbrPostulantNew:Number;
    libelle:String;
    fichier:any;
    message:String;
    postulantsTires:any;

    //variable qui doit indiquer s'il ya erreur ou pas
    erreur=false;

    constructor(public listeService:ListeService, public tirageService:TirageService,private router:Router) { }

    ngOnInit(): void {
    }


    newTirage(f:NgForm){
      this.tirageService.create(this.libelle,this.nbrPostulantNew,this.fichier).subscribe(data=>{
        console.log(data.message)

        if(data.message=="ok"){
          console.log(data.data[0].id)
          this.postulantsTires=data.data;
          this.router.navigate(["detailstirage"],data.data[0].id);
        }else if(data.message=="Cette lise existe deja"){
          this.erreur=true;
          this.message="Une liste avec le même libelle existe déja !"
        }else if(data.message=="Veuiller fournir un fichier Excel valide!"){
          this.erreur=true;
          this.message="Veuiller founir un fichier valide ! "
        }
      })
    }



    //evenement lorsque le fichier est choisi
    selectFile(e:any){
      //verification si une photo a été choisie ou pas
      if(!e.target.files[0] || e.target.files[0].length==0){
        this.message="Vous devez choisir un fichier execel !";
        this.erreur=true;
        return;
      }
  
      // //verification du type de fichier choisi pour recaler si ce n'est pas une photo
      // var typeFichier=e.target.files[0].type;
      // if(typeFichier.match(/image\/*/)==null){
      //   this.message="Seul les images sont suportées";
    
      //   return;
  
      // }
  
  
  
      if(e.target.files){
        var reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.message="";
          //this.fichier=event.target.result;
          this.fichier=e.target['files'][0];
        }
      }
     }

}
