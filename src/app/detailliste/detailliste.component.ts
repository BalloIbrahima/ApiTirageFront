import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { Postulant } from '../postulant';
import { PostulantService } from '../postulant.service';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';
import { ListeService } from '../services/Liste/liste.service';

@Component({
  selector: 'app-detailliste',
  templateUrl: './detailliste.component.html',
  styleUrls: ['./detailliste.component.scss']
})

export class DetaillisteComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {

  }

}

