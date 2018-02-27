import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapaRoutingModule } from './mapa-routing.module';
import { MapaComponent } from './mapa.component';

import { KonvaModule } from 'ng2-konva';

@NgModule({
  imports: [
    CommonModule,
    MapaRoutingModule,
    KonvaModule
  ],
  declarations: [MapaComponent],
  exports: [MapaComponent]
})
export class MapaModule { }
