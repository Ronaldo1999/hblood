import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-demarage',
  templateUrl: './demarage.page.html',
  styleUrls: ['./demarage.page.scss'],
})
export class DemaragePage implements OnInit {

  topStories: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('sliders') slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
    this.topStories = [
      { title: '1', author: 'Rea Ramsey', body: '', picture: 'assets/undraw_medicine_b-1-ol.svg' },
      { title: '2', author: 'Ellesha Hartley', body: '', picture: 'assets/undraw_doctor_kw-5-l.svg' },
      { title: '3', author: 'Vinnie Alexander', body: '', picture: 'assets/undraw_metrics_re_6g90.svg' },
      // { title: 'Astro Photography Guide', author: 'Greg Rakozy', body: '', picture: 'assets/undraw_security_on_re_e491.svg' }
    ];
  }

  nextSlide() {
    this.slides.slideNext();
  }
  getLoginPage() {
    this.router.navigate(['/login']);
  }

}
