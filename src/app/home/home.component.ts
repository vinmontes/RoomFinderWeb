import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { DestPageComponent } from "../dest-page/dest-page.component"; 
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

import { CUBES } from '../data/data';

//import {MdAutocompleteModule} from '@angular/material';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public localState = { value: '' };
  cubeCtrl: FormControl;
  filteredCubes: any;

  cubes = CUBES;

  // TypeScript public modifiers
  constructor( private router: Router) 
  { console.log(this.cubes);
    this.cubeCtrl = new FormControl();
    this.filteredCubes = this.cubeCtrl.valueChanges
 //       .startWith(null)
        .map(name => this.filterCubes(name));
  }
    filterCubes(val: string) {
      console.log("test");
      console.log(val);
    return val ? this.cubes.filter(cube => new RegExp(`^${val}`, 'gi').test(cube.owner))
               : this.cubes;
  }

  public clicked() {
    this.router.navigate(["dest-page"]);
  }

  
}
export const appComponents: any = [
    HomeComponent,
    DestPageComponent

];

