import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from '../components/galeria/galeria.component';
import { Teste2Component } from '../components/teste2/teste2.component'


@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    Teste2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
