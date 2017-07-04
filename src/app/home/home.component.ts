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

export class HomeComponent implements OnInit{
 
   public query = '';
   showSearchContent: boolean = false;
   cubes = [];
 
   public filteredList = [];
   public elementRef;
   selectedIdx: number;
 
   constructor(private router: Router){}
 
   ngOnInit(){
       this.cubes = CUBES;
    //    console.log(JSON.stringify(this.cubes));
    //    this.filteredList = this.cubes;
       this.showSearchContent = false;
   }
 
   cubeSelected(){
       this.router.navigate(["dest-page"]);
   }
 
   filter(event: any) {
       console.log("event: " + this.query);
       this.showSearchContent = true;
       if (this.query !== undefined) {
           if(this.query !==""){
               this.filteredList = this.cubes.filter(function (cube) {
                   // console.log("cube: " + JSON.stringify(cube));
                   let checkIfOwnerName = new RegExp('^[A-Za-z\s]+');
                   // console.log("RegexTest: " + checkIfOwnerName.test(this.query));
                   // console.log("Type test: " + typeof this.query);
                   if(checkIfOwnerName.test(this.query)){
                       return cube.owner.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                   }
                   else{
                       return cube.id.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                   }
               }.bind(this));
           }
           else{
               this.showSearchContent = false;
               return this.filteredList = [];
           }
          
           if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
               this.selectedIdx++;
           } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
               this.selectedIdx--;
           }
       } else {
           this.filteredList = [];
       }
   }
 
   handleBlur() {
       if (this.selectedIdx > -1) {
           this.query = this.filteredList[this.selectedIdx];
       }
       this.filteredList = [];
       this.selectedIdx = -1;
   }
 
   handleClick(event) {
       var clickedComponent = event.target;
       var inside = false;
       do {
           if (clickedComponent === this.elementRef.nativeElement) {
               inside = true;
           }
           clickedComponent = clickedComponent.parentNode;
       } while (clickedComponent);
       if (!inside) {
           this.filteredList = [];
       }
       this.selectedIdx = -1;
   }
 
}


/*
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

*/