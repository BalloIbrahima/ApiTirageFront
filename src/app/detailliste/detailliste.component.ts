import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeService } from '../services/Liste/liste.service';

@Component({
  selector: 'app-detailliste',
  templateUrl: './detailliste.component.html',
  styleUrls: ['./detailliste.component.scss']
})
export class DetaillisteComponent implements OnInit {
  list:any;
  constructor(public curentLink:ActivatedRoute, public listeService:ListeService) { }

  ngOnInit(): void {
    const id=this.curentLink.snapshot.params['id']
    
    this.listeService.getTirages(id).subscribe(donne=>{
      this.list=donne.data
    })

  }

}
