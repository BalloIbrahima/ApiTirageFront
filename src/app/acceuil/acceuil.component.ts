import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  p: number = 1;
  list: any;
  serachListe:any;

  constructor(private service: PostulantService, private router:Router) { }

  ngOnInit(): void {
    this.service.getToutesListe().subscribe(data=>{
      this.list=data;
    })
  }

  goToDetailliste(id:number){
    console.log(id);
    return this.router.navigate(['detailsliste', id])
  }
}
