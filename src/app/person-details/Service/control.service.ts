import { Injectable } from '@angular/core';
import { Base } from '../Model/base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  constructor() {}

  toFormGroup(personDetail: Base<string>[]) {
    let group: any = {};

    personDetail.forEach(detail=>{
      group[detail.key]=detail.required 
      ? new FormControl(detail.value || '',Validators.required)
      : new FormControl(detail.value || '');
    });
    return new FormGroup(group);
  }
}
