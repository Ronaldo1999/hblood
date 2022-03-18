import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorListPageRoutingModule } from './doctor-list-routing.module';

import { DoctorListPage } from './doctor-list.page';
import { UserService } from 'src/app/service/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorListPageRoutingModule
  ],
  declarations: [DoctorListPage],
  providers: [UserService, DatePipe]

})
export class DoctorListPageModule { }
