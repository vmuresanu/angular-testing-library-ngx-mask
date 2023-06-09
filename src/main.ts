import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskDirective,
  ],
  template: `
    <div [formGroup]="formGroup">
      <h1>Hello from {{name}}!</h1>
      <mat-form-field>
        <input matInput formControlName="value" mask="separator.2" thousandSeparator="," decimalMarker="." placeholder="Enter amount" />
      </mat-form-field>
    </div>
  `,
})
export class App {
  name = 'Angular';
  formGroup = new FormGroup({ value: new FormControl('') });
}

bootstrapApplication(App, {
  providers: [
    provideEnvironmentNgxMask(),
    provideAnimations(),
    importProvidersFrom(BrowserModule),
  ],
});
