// IMPORT ALL MATERIAL COMPONENTS
// #STEPS
// 1- Import this file as module in app.module.ts ==> import { MaterialModule } from './xyz/abc';
// 2- Initialize it in imports:[] array ==> imports:[MaterialModule]

import { NgModule } from '@angular/core';

// *************** NAVIGATION ***************
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

// *************** LAYOUT ***************
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatExpansionModule } from '@angular/material/expansion';

// *************** BUTTONS & INDICATORS ***************
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

// *************** GRID ***************
import { MatGridListModule } from '@angular/material/grid-list';

// *************** LIST ***************
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';

// *************** TOOLBAR ***************
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';

// *************** MODAL-DIALOG ***************
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

import { MatDividerModule } from '@angular/material/divider';

// *************** MESSAGE SERVICE ***************
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
// *************** loading***************
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import {
  MatPseudoCheckboxModule,
} from '@angular/material/core';
import {
  MatLegacyOptionModule as MatOptionModule,
} from '@angular/material/legacy-core';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatFormFieldModule } from '@angular/material/form-field';
const AllMaterialModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatRadioModule,
  MatBadgeModule,
  MatTabsModule,
  MatCheckboxModule,
  MatInputModule,
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class MaterialModule { }
