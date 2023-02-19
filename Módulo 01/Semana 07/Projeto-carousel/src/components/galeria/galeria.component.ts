import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  public title = 'Galeria de imagens';
  public fotos = [];
  
  public fotoAtual = 0;
  
  public goToFirst (){
    return this.fotos.length -1;
  }
  public goToLast (){
    return 0;
  }

public goToNext (){
  this.fotoAtual++
}

  public goToPrevius (){
    this.fotoAtual--
  } 
}