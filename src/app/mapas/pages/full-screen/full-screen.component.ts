import { Component, OnInit } from '@angular/core';
 import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment.prod';
 
@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
  #mapa {
    height: 100%;
    width: 100%; 
  }`
  ]
})
export class FullScreenComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken=environment.mapboxToken
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -63.182459086667805, -17.78357491525552/* -75.921029433568, 45.28719674822362 */ ],
      zoom: 18
    }); 

  }

}
