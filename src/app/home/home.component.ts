import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { DestPageComponent } from "../dest-page/dest-page.component"; 
import { FormControl } from '@angular/forms';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import 'rxjs/add/operator/startWith';

import { CUBICAL } from '../model/cubical';
import { CUBES } from '../data/data';

//import {MdAutocompleteModule} from '@angular/material';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1s ease-in')
      ]),
        transition('* => void', [
        animate('2s 1s ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ]
})

export class HomeComponent {
  public localState = { value: '' };
  cubeCtrl: FormControl;
  filteredCubes: CUBICAL[] = [];

  cubes = CUBES;

  // TypeScript public modifiers
  constructor( private router: Router) 
  { console.log(JSON.stringify(this.cubes));
    this.filteredCubes = this.cubes;
 
  }
    filterCubes(val: string) {
      console.log("test");
      console.log(val);
      if (val) {
        const filterValue = val.toLowerCase();
        return this.cubes.filter(cube => cube.owner.toLowerCase().startsWith(filterValue));
      }

      return this.cubes;
  }

  selectedCube(cube: CUBICAL){
    console.log(JSON.stringify(cube));
    this.router.navigate(["dest-page", cube.id]);
  }

  public clicked() {
    this.router.navigate(["dest-page"]);
  }

  displayFn(cube: CUBICAL) {
      return cube ? cube.owner : cube;
   }

  
}
export const appComponents: any = [
    HomeComponent,
    DestPageComponent

];

