import { ControlService } from './../../Service/control.service';
import { Component, OnInit, Input } from '@angular/core';
import { Base } from '../../Model/base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

 

  @Input() details: Base<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private cs: ControlService) {  }

  ngOnInit() {
    this.form = this.cs.toFormGroup(this.details);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}


