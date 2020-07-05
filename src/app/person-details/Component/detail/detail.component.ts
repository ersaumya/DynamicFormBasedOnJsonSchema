import { Base } from './../../Model/base';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() detail: Base<string>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.detail.key].valid;
  }
}
