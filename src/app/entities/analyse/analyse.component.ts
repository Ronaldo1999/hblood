import { Component, OnInit } from '@angular/core';
import { Analyse } from 'src/app/model/analyse';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.scss'],
})
export class AnalyseComponent implements OnInit {

  analyses: Analyse[] = [];
  showModal: boolean = false;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.listAnalyse();
  }

  listAnalyse() {
    this.api.listAnalyse().subscribe(data => {
      this.analyses = data;
    });
  }

}
