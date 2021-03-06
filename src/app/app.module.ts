import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdAutocompleteModule,
          MdButtonModule,
          MdButtonToggleModule,
          MdCardModule,
          MdCheckboxModule,
          MdChipsModule,
          MdDatepickerModule,
          MdDialogModule,
          MdGridListModule,
          MdIconModule,
          MdInputModule,
          MdListModule,
          MdMenuModule,
          MdNativeDateModule,
          MdProgressBarModule,
          MdProgressSpinnerModule,
          MdRadioModule,
          MdSelectModule,
          MdSidenavModule,
          MdSliderModule,
          MdSlideToggleModule,
          MdSnackBarModule,
          MdTabsModule,
          MdToolbarModule,
          MdTooltipModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { DestPageComponent } from './dest-page/dest-page.component'; 
import { ImgDialog } from './dest-page/dest-page.component'; 
import { FinalViewComponent } from './final-view/final-view.component'; 

import '../styles/styles.scss';
import '../styles/headings.css';

enableProdMode();

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    DestPageComponent,
    FinalViewComponent,
    ImgDialog
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  entryComponents: [ImgDialog],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}
}