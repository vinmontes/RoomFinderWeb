import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 


@Component({
  selector: 'final-view.component',  
  styleUrls: [ './final-view.component.css' ],
  templateUrl: './final-view.component.html'
})

export class FinalViewComponent {
      public localState = { value: '' };
  constructor( private router: Router) 
  {}
  public clicked() {
    this.router.navigate(["dest-page"]);
  }
  public clickedNew() {
    this.router.navigate(["home"]);
  }
  
}