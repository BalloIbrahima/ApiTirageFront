import { Component, OnInit } from '@angular/core';
import { Detailsliste } from '../detailsliste';
import { DetailslisteService } from '../detailsliste.service';

@Component({
  selector: 'app-detailliste',
  templateUrl: './detailliste.component.html',
  styleUrls: ['./detailliste.component.scss']
})
export class DetaillisteComponent implements OnInit {

  detailsliste!: Detailsliste[];
  constructor(private detailslisteService: DetailslisteService) { }

  ngOnInit(): void {
    this.detailslisteService.getDetailsliste().subscribe((data: Detailsliste[]) => {
      console.log(data);
      this.detailsliste = data;
    });
  }

}
