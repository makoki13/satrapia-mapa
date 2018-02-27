import { Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { KonvaComponent } from 'ng2-konva';

@Component({
  selector: 'sat-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  ImgObj = new Image();

  @ViewChild('mapa') stage: KonvaComponent;

  constructor() {
    this.ImgObj.src = '../../assets/mapa.jpg';
   }

  public configStage = new BehaviorSubject({
    opacity: 0.1,
    x: 50,
    y: 50,
    image: this.ImgObj,
    width: 1200,
    height: 800
  });

  public handleClick(component) {
    const vImagen = this.configStage.getValue();
    console.log(vImagen);
    let opacidadActual = vImagen.opacity;
    opacidadActual += 0.1;

    this.configStage.next({
      opacity: opacidadActual,
      x: 50,
      y: 50,
      image: this.ImgObj,
      width: 1200,
      height: 800
    });
  }

  ngOnInit() {
  }

}
