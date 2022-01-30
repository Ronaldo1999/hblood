import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemaragePageRoutingModule } from './demarage-routing.module';

import { DemaragePage } from './demarage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemaragePageRoutingModule
  ],
  declarations: [DemaragePage]
})
export class DemaragePageModule {}
