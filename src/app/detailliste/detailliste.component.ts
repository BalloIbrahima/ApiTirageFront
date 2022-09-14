import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Detailsliste } from '../detailsliste';
import { DetailslisteService } from '../detailsliste.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Postulant } from '../postulant';
import { PostulantService } from '../postulant.service';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-detailliste',
  templateUrl: './detailliste.component.html',
  styleUrls: ['./detailliste.component.scss']
})

export class DetaillisteComponent implements OnInit{
  list: any;
  searchText:any;
  tirage: any;
  postulant!: Postulant[];
  
  id: number = 0;
  p: number = 0;
  t: number = 1;
  tirageListe!: Tirage[];
  libelle!: string

  Addpostulant: Postulant = new Postulant();

  constructor(private tirageService: TirageService,private service: PostulantService, private route:ActivatedRoute, private router:Router,private postulantService: PostulantService, private detailsliste : DetailslisteService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    //fonction permettant d'appéllé toute les postulants 
    this.postulantService.getPostulant().subscribe((data: Postulant[]) => {
      console.log(data);
      this.postulant = data;
    });
    //fonction permettant d'appéllé toute les listes 
    this.service.getToutesListe().subscribe(data=>{
      this.list=data;
    })
    // fonction permettant d'appéllé toute les tirages 
    this.tirageService.getTirage(this.id).subscribe(data=>{
      this.tirage=data;
    })

    this.libelle = this.route.snapshot.params['id']
    this.tirageService.getTirageParLibelleListe(this.libelle).subscribe((data: Tirage[])=>{
      console.log(data);
      this.tirageListe = data;
    })

    // this.detailsliste.getTirageAssocier(this.id).subscribe(data=>{
    //   console.log(data)
    //   this.tirage=data;
    // })
  }

  onSubmit(){
    console.log(this.Addpostulant);
  }



}

