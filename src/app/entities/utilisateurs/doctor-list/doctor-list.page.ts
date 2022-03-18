import { Component, OnInit } from '@angular/core';
import { IUtilisateur, Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.page.html',
  styleUrls: ['./doctor-list.page.scss'],
})
export class DoctorListPage implements OnInit {

  doctors: IUtilisateur[];
  //doctor: Utilisateur;
  constructor(
    private doctorService: UserService
  ) { }

  ngOnInit() {
    //this.doctor = new Utilisateur();
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    })
  }

}
