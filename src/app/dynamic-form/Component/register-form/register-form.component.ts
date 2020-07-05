import { FormControlService } from './../../service/form-control.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  dynamicFormArray: any;

  constructor(
    private formControl: FormControlService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({});

    this.formControl.getDynamicFormControl().subscribe((data) => {
      this.dynamicFormArray = data;
      this.createFormControl();
    });
  }

  createFormControl() {
    this.dynamicFormArray.forEach((element) => {
      if (element.Required === true) {
        this.registerForm.addControl(
          element.ID,
          new FormControl('', Validators.required)
        );
      } else {
        this.registerForm.addControl(element.ID, new FormControl(''));
      }
    });
    console.log(this.registerForm);
  }

  onSubmit() {
    alert('SUCCESS!! :-)');
  }
}
