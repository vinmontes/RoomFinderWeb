import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 

@Component({
  selector: 'dest-page.component',  
  styleUrls: [ './dest-page.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './dest-page.component.html'
})

export class DestPageComponent {
    public localState = { value: '' };
  constructor( private router: Router) 
  {}
  public clicked() {
    this.router.navigate(["final-view.component"]);
  }
    public clickedNew() {
    this.router.navigate(["home.component"]);
  }
}