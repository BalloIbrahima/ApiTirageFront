import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeService } from '../services/Liste/liste.service';
import { PostulantService } from '../services/Postulant/postulant.service';
import { TirageService } from '../services/Tirage/tirage.service';

@Component({
  selector: 'app-detailtirage',
  templateUrl: './detailtirage.component.html',
  styleUrls: ['./detailtirage.component.scss']
})
export class DetailtirageComponent implements OnInit {
  p:any;
  tirage:any;
  constructor(public curentLink:ActivatedRoute, public listeService:ListeService,public postulantService:PostulantService,public tirageService:TirageService) { }

  ngOnInit(): void {
    const id=this.curentLink.snapshot.params['id']
    
    this.tirageService.getTirages(id).subscribe(donne=>{
      console.log(donne)

      this.tirage=donne.data
    })
  }

  postulant(id:Number){
    console.log("aaaaaaaaa")

    this.postulantService.getPostulant(id).subscribe(donne=>{
      console.log(donne)
     this.p = donne.data;
    })

    return this.p;
  }

}
