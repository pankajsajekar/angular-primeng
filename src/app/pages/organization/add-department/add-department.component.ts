import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent {
  
  @Output() formSubmitted: EventEmitter<any> = new EventEmitter();

  form!: FormGroup;
  loading = false;
  submitting = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ){}

  ngOnInit() {
    // form with validation rules
    this.form = this.formBuilder.group({
      dpt_name: ['', Validators.required],
    });
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    else{
      this.loading = true;
      const inputData =  this.form.value
      console.log(inputData)

      // send to main Component
      this.formSubmitted.emit();

      this.form.reset(); 
      
      this.loading = false;
    }
  }

}