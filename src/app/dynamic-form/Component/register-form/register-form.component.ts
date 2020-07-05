import { FormControlService } from './../../service/form-control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  dynamicFormArray:any;
  constructor(private formControl:FormControlService) { }

  ngOnInit(): void {
    this.formControl.getDynamicFormControl().subscribe((data) => {
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray);
    });
  }

}
