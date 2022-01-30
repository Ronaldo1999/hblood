import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientModule } from "module";
import { HttpClientModule } from '@angular/common/http';
import { AnalyseComponent } from './entities/analyse/analyse.component';



@NgModule({
  declarations: [AnalyseComponent, AppComponent],
  entryComponents: [],
  // IonLabel, IonItem, IonItemGroup, IonItemDivider
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
