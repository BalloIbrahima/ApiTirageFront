import { Component, OnInit } from '@angular/core';
import { Detailsliste } from '../detailsliste';
import { DetailslisteService } from '../detailsliste.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Postulant } from '../postulant';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-detailliste',
  templateUrl: './detailliste.component.html',
  styleUrls: ['./detailliste.component.scss']
})
export class DetaillisteComponent implements OnInit {

  postulant!: Postulant[];
  id: number = 0;

  constructor(private service: PostulantService, private router:ActivatedRoute, private route:Router,private postulantService: PostulantService) { }

  ngOnInit(): void {
    this.postulantService.getPostulant().subscribe((data: Postulant[]) => {
      console.log(data);
      this.postulant = data;
    });
  }

  goToDetailsliste(id:number){
    console.log(id);
    //return this.router.navigate(['detailstirage', id]);
  }

}
