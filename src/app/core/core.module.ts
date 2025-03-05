import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from '@ngrx/store';

import { environment } from "src/environments/environment";

import { effects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from "./store/reducers";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([
      ...effects
    ]),
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 40, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
    };
  }
}
