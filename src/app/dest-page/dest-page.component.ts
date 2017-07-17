import { Component, OnInit, Inject } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from "@angular/router"; 
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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

  fullMapImg = "";
  destImg = "";

  floor: string = "";

  showFullImg: boolean;
  showDestImg: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public dialog: MdDialog
  ) {}

  ngOnInit(){
    this.route.params
      .forEach(param => {
        this.cubeId = param['id'];
      })
    // console.log(this.cubeId);
    if(this.cubeId != undefined && this.cubeId.length > 1){
      this.floor = this.cubeId.charAt(1);
      // console.log(this.floor);
    }

    this.showFullImg = true;
    this.showDestImg = false;
  
    this.fullMapImg = "assets/img/cubes/" + this.cubeId + ".png";
    this.destImg = "assets/img/cubes/" + this.cubeId + "Z.png";

  }

  clicked(){
    this.router.navigate(["final-view", this.cubeId]);
  }
  
  clickedNew() {
    this.router.navigate(["home"]);
  }

  openDialog(value, imagePath){
    let dialogRef = this.dialog.open(ImgDialog, {
      data: {
        id: value,
        img: imagePath
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}


@Component({
  selector: 'dialog-img-dialog',
  template: `<p md-dialog-title> {{ passedId }} </p>
             <p md-dialog-content>
              <img [src]="passedImg">
             </p>
            `,
})
export class ImgDialog implements OnInit {
  
  passedId: string;
  passedImg: string;
  
  constructor(@Inject(MD_DIALOG_DATA) private data: { id: string, img: string }, 
              public dialogRef: MdDialogRef<ImgDialog>) {}
              
  ngOnInit(){
    this.passedId = this.data.id; 
    this.passedImg = this.data.img; 
  }
}