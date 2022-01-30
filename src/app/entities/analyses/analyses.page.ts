import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Analyse } from 'src/app/model/analyse';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.page.html',
  styleUrls: ['./analyses.page.scss'],
})
export class AnalysesPage implements OnInit {

  etat = 'success';
  analyses: Analyse[] = [];
  analyse: Analyse = new Analyse();
  showModal = false;
  constructor(
    private api: ApiService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.listAnalyse();
    // this.controlEtatSanitaire(this.analyse.etatSanitaire);
  }

  listAnalyse() {
    this.api.listAnalyse().subscribe(data => {
      this.analyses = data;
    });
  }

  saveAnalyse() {
    this.api.createAnalyse(this.analyse).subscribe(data => {
      this.listAnalyse();
    });
    this.showModal = false;
  }
  controlEtatSanitaire(etatSanitaire) {
    let etat;
    switch (etatSanitaire) {
      case 'optimal':
        etat = 'danger';
        break;
      case 'normal':
        etat = 'danger';
        break;
      case 'normal haute':
        etat = 'warning';
        break;
      case 'hypertension legere':
        etat = 'warning';
        break;
      case 'hypertension modere':
        etat = 'warning';
        break;
      case 'hypertension severe':
        etat = 'danger';
        break;
      case 'hypertension tres severe':
        etat = 'danger';
        break;
    }
    return etat;
  }
}
