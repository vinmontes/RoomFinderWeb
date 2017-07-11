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
          transform: 'translateX(-100%)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(-100%)'}))
      ])
    ]),
    trigger('flyOutIn', [
      state('in', style({opacity: 1, transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          transform: 'translateX(100%)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class FinalViewComponent implements OnInit{
  
  loggedIn: boolean = false;

  username: string;
  password: string;

  ngOnInit(){
    this.loggedIn = false;
  }

  checkCredentials(){
    if(this.username == "roomfinder" && this.password == "upsuic2$!7"){
      this.loggedIn = true;
    }
  }
  
}