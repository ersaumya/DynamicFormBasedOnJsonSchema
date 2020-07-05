import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFormComponent } from './Component/register-form/register-form.component';


@NgModule({
  declarations: [RegisterFormComponent],
  imports: [CommonModule, HttpClientModule, DynamicFormRoutingModule],
  exports: [RegisterFormComponent]
})
export class DynamicFormModule {}
