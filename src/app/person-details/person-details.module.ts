import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonDetailsRoutingModule } from './person-details-routing.module';
import { DetailComponent } from './Component/detail/detail.component';
import { FormComponent } from './Component/form/form.component';


@NgModule({
  declarations: [DetailComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, PersonDetailsRoutingModule],
  exports: [FormComponent]
})
export class PersonDetailsModule {}
