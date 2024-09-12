import { Component } from '@angular/core';
import { Boletim } from "./boletim";

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})
export class CalculaMediaComponent {
  mediaParcial: number | undefined
  mediaFinal: number | undefined
  boletim: Boletim;
  constructor() {
    this.mediaParcial = undefined;
    this.mediaFinal = undefined;
    this.boletim = new Boletim(0, 0, 0, 0)
  }

  calcular_media_parcial(
    b1: number,
    b2: number,
    b3: number,
    b4: number) {
    if (b1 && b2 && b3 && b4) {
      this.boletim = new Boletim(b1, b2, b3, b4);
      this.mediaParcial = this.boletim.calcular_media_parcial()
    }
  }

  calcular_media_final(naf: number) {
    if (this.mediaParcial){
      let mf = ((this.mediaParcial+naf)/2);
      if (mf>= 60) {
        this.mediaFinal = mf
      }
      else if (mf<60 && mf>=10) {
        this.mediaFinal = mf
      }
      else{
        this.mediaFinal = mf
      }   
    }
  }
}
