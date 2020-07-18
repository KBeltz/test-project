import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.sass']
})
export class TestFormComponent implements OnInit {
  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      preferredName: [''],
    })
  }

  onSubmit(): void {
    console.log('Is form valid? ', this.testForm.valid)
  }
}
