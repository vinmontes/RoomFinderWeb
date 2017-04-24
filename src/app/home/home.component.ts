import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { DestPageComponent } from "../dest-page/dest-page.component"; 




@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  providers: [],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor( private router: Router) 
  {}
  public clicked() {
    this.router.navigate(["dest-page.component"]);
  }
}
export const appComponents: any = [
    HomeComponent,
    DestPageComponent

];

