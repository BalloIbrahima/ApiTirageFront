import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeService } from '../services/Liste/liste.service';

@Component({
  selector: 'app-detailliste',
  templateUrl: './detailliste.component.html',
  styleUrls: ['./detailliste.component.scss']
})
export class DetaillisteComponent implements OnInit {
  searchText:any;
  p:any;
  list:any;
  constructor(public curentLink:ActivatedRoute, public listeService:ListeService) { }

  ngOnInit(): void {
    const id=this.curentLink.snapshot.params['id']
    
    this.listeService.getTirages(id).subscribe(donne=>{
      console.log(donne)
      this.list=donne.data
    })

  }

}
