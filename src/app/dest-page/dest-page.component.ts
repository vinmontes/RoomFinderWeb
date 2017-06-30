import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { DestPageService } from './dest-page.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'dest-page.component',  
  styleUrls: [ './dest-page.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dest-page.component.html',
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

export class DestPageComponent implements OnInit {
    
  cubeId: string;
  img: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private destPageService: DestPageService
  ) {}

  ngOnInit(){
    this.route.params
      .forEach(param => {
        this.cubeId = param['id'];
      })

    console.log(this.cubeId);
  }

  clicked(){
    this.router.navigate(["final-view", this.cubeId]);
  }
    public clickedNew() {
    this.router.navigate(["home"]);
  }
}