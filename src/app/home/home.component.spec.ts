import { NO_ERRORS_SCHEMA } from '@angular/core';
import {inject, async, TestBed, ComponentFixture} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {MdButtonModule} from '@angular/material'; //I did npm install --save @angular/material@latest but get UNMET PEER DEPENDENCY 

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';
import { Title } from './title';
import {MdAutocompleteModule} from '@angular/material';



describe(`Home`, () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        MdButtonModule,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        AppState,
        Title,
      ]
    })
    .compileComponents(); // compile template and css
  }));
  })

