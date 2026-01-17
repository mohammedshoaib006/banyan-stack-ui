// src/app/material/material.ts
// Centralized Angular Material imports for Standalone components

// FORM CONTROLS
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// BUTTONS & INDICATORS
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// LAYOUT & NAVIGATION
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';

// DATA TABLE & TREE
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';

// POPUPS & MODALS
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTooltipModule } from '@angular/material/tooltip';

// CARDS & CONTENT
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

// EXPORT AS SINGLE ARRAY (Standalone-friendly)
export const MATERIAL_MODULES = [
  // Form Controls
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,

  // Buttons & Indicators
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  // Layout & Navigation
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatStepperModule,
  MatDividerModule,

  // Data Table & Tree
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatTreeModule,

  // Popups & Modals
  MatDialogModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatTooltipModule,

  // Cards & Content
  MatCardModule,
  MatGridListModule,
  MatChipsModule
];
