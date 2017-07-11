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
   selectedIdx: number = -1;

   showCubeOwner: boolean = false;
   showCubeId: boolean = false;
 
   constructor(private router: Router){}
 
   ngOnInit(){
       this.cubes = CUBES;
    //    console.log(JSON.stringify(this.cubes));
    //    this.filteredList = this.cubes;
       this.showSearchContent = false;
   }
 
   cubeSelected(cube){
       this.showCubeOwner = false;
       this.showCubeId = false;
       this.router.navigate(["dest-page", cube.id]);
   }
 
   filter(event: any) {
    //    console.log("event: " + this.query);
       this.showSearchContent = true;
       if (this.query !== undefined) {
           if(this.query !==""){
               this.filteredList = this.cubes.filter(function (cube) {
                   // console.log("cube: " + JSON.stringify(cube));
                   let checkIfOwnerName = new RegExp('^[A-Za-z]+[ ]*[A-Za-z]*$');
                //    let checkIfOwnerName = new RegExp('^\D+$');
                   
                //    let checkIfCubeId = new RegExp('^P\d\S*');
                //    console.log("checkIfOwnerName: " + checkIfOwnerName.test(this.query));
                //    console.log("checkIfCubeId: " + checkIfCubeId.test(this.query));
                   // console.log("Type test: " + typeof this.query);
                   if(checkIfOwnerName.test(this.query)){
                    //    console.log("Running Q1")
                       this.showCubeId = false;
                       this.showCubeOwner = true;
                    //    console.log(cube.owner.toLowerCase().indexOf(this.query.toLowerCase()));
                       return cube.owner.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                   }
                   else{
                    //    console.log("Running Q2")
                       this.showCubeOwner = false; 
                       this.showCubeId = true;
                       return cube.id.toLowerCase().indexOf(this.query.toLowerCase()) == 0;
                   }
               }.bind(this));
           }
           else{
               this.showSearchContent = false;
               this.showCubeOwner = false;
               this.showCubeId = false;
               return this.filteredList = [];
           }

        //   console.log("eventCode: " + event.code);
        //   console.log("this.selectedIdx: " + this.selectedIdx);
        //   console.log("this.filteredList.length: " + this.filteredList.length);

           if (event.code == "ArrowDown" && this.selectedIdx < this.filteredList.length) {
            //    console.log("Running 1");
               this.selectedIdx++;
           } else if (event.code == "ArrowUp" && this.selectedIdx > 0) {
            //    console.log("Running 2");
               this.selectedIdx--;
           } else if (event.code == "Enter" && this.selectedIdx > -1){
               this.cubeSelected(this.filteredList[this.selectedIdx]); 
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

   setIndex(rowIndex){
       this.selectedIdx = rowIndex;
   }

   resetIndex(){
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