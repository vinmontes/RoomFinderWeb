import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { DestPageComponent } from "../dest-page/dest-page.component"; 
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';

//import {MdAutocompleteModule} from '@angular/material';






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
  stateCtrl: FormControl;
  filteredStates: any;

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];


  // TypeScript public modifiers
  constructor( private router: Router) 
  {
     this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
 //       .startWith(null)
        .map(name => this.filterStates(name));
  }
    filterStates(val: string) {
      console.log("test");
      console.log(val);
    return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
               : this.states;
  }

  public clicked() {
    this.router.navigate(["dest-page.component"]);
  }

  
}
export const appComponents: any = [
    HomeComponent,
    DestPageComponent

];

