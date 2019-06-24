import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
  })
  export class LocationComponent implements OnInit {
    lat: number = -23.8779431;
    lng: number = -49.8046873;
    zoom: number = 15;

    constructor() { }
  
    ngOnInit() {

        
    }

    initialize() {
        var bangalore = { lat: 12.97, lng: 77.59 };
        
      }

  }
  