import { DropdownPerson } from './../Control/dropdown-person';
import { TextboxPerson } from './../Control/textbox-person';
import { Injectable } from '@angular/core';
import { Base } from '../Model/base';
import { TextareaPerson } from '../Control/textarea-person';
import { RadiobuttonPerson } from '../Control/radiobutton-person';
import { CheckboxPerson } from '../Control/checkbox-person';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetaildataService {
  constructor() {}

  getDetails() {
    let detail: Base<string>[] = [
      new TextboxPerson({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),
      new TextareaPerson({
        key: 'address',
        label: 'Address',
        value: 'salipur',
        required: true,
        order: 1,
      }),
      new DropdownPerson({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),
      new RadiobuttonPerson({
        key: 'gender',
        label: 'Gender',
        options:[ 'Male','Female'],
        required: true,
        order: 1,
      }),
      new CheckboxPerson({
        key: 'hobbies',
        label: 'Hobbies',
        options:['Cricket','Biking','Skating','Swimming'],
        required: true,
        order: 1,
      }),
    ];
     return of(detail.sort((a, b) => a.order - b.order));
  }
}
