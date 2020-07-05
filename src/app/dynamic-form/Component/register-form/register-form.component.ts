import { FormControlService } from './../../service/form-control.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm:FormGroup;
  dynamicFormArray:any;
  constructor(private formControl:FormControlService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({

    })

    this.formControl.getDynamicFormControl().subscribe((data) => {
      this.dynamicFormArray = data;
      this.createFormControl();
    });
  }

  createFormControl(){
    this.dynamicFormArray.forEach(element => {
      this.registerForm.addControl(element.ID,new FormControl(''));
    });
    console.log(this.registerForm);
  }

}
