import { Component, OnInit, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

  public configStage = Observable.of({
    width: 1200,
    height: 800
  });

  public imagen = Observable.of({
    x: 50,
    y: 50,
    image: this.ImgObj,
    width: 1200,
    height: 800,
    opacity: 0.1
  });

  public handleClick(component) {
    this.imagen.value.opacity += 0.1;
    console.log(this.imagen.value);
    const stageD = this.stage.getStage();
    stageD.draw();
  }

  ngOnInit() {
  }

}
