import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'final-view.component',  
  styleUrls: [ './final-view.component.css' ],
  templateUrl: './final-view.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1s ease-in')
      ]),
        transition('* => void', [
        style({
          opacity: 0
        }),
        animate('1s ease-in')
      ])
    ])
  ]
})

export class FinalViewComponent {

  cubeId: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(){
    this.route.params
      .forEach(param => {
        this.cubeId = param['id'];
      })

    console.log(this.cubeId);
  }

  public clicked() {
    this.router.navigate(["dest-page", this.cubeId]);
  }
  public clickedNew() {
    this.router.navigate(["home"]);
  }
  
}